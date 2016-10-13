import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {

  private apiLien = "http://localhost:8888/laboratoire/angular2/planning/api/";

  constructor( public http:Http) {}

  get(dossier, id?){
    this.showLoadingAlert();
    
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let url = this.apiLien + dossier + '/';
    if (id)
      url = url + id;
    console.log('url rest -> ' + url)
    return  this.http
      .get( url, { headers } )
      .map( (res) => {
        this.hideLoadingAlert();
        return res.json();
      });
  }

  post(dossier, data){
    this.showLoadingAlert();
    let headers = new Headers({'Content-Type': 'application/json'});
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    
    let url = this.apiLien + dossier
    
    return this.http
             .post( url , JSON.stringify(data), {headers: headers})
             .toPromise()
             .then((res) => { 
              
              this.hideLoadingAlert();
              return res.json();
            })
             .catch(this.handleError);
  }

  postJSON(dossier, data){
    this.showLoadingAlert();
    let headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    
    let url = this.apiLien + dossier ;

    console.log('data post json', data)
    
    return this.http
             .post( url , data)
             .map( (res) => {
              this.hideLoadingAlert();
              return res.json();
            });
  }

  put(dossier, data){
    let headers = new Headers({'Content-Type': 'application/json'});
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);

    let url = this.apiLien + dossier ;

    return this.http
             .put( url, JSON.stringify(data), {headers})
             .toPromise()
             .then(res => res.json())
             .catch(this.handleError);
  }

  private handleError(error: any){
    console.error('An error occurred', error);
  }

  showLoadingAlert(){
    document.getElementById("loading").style.bottom = "30px";
  }

  hideLoadingAlert(){
    document.getElementById("loading").style.bottom = "-100px";
  }
  
}