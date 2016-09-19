import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NotificationsService } from 'angular2-notifications';

import { RestService } from './../../services/rest.service';

export class User {
  prenom: string;
  nom: string;
  passe: string;
  code : string;
}

@Component({
  selector: 'app-senregistrer',
  templateUrl: './senregistrer.component.html',
  styleUrls: ['./senregistrer.component.styl']
})
export class SenregistrerComponent implements OnInit {

   private user:User;
   private errorShow:Boolean;
   private okShow:Boolean;

  constructor(
    private _route:ActivatedRoute,
    private _http:Http,
    private _notif: NotificationsService,
    private _rest:RestService
  ) { 

  }

  ngOnInit() {
    
    this.user = {
      prenom:'',
      nom:'',
      passe:'',
      code: this._route.snapshot.params['code']
    };
    this.checkCode( this.user.code );
    this.errorShow = false;
    this.okShow = false;
  }

  onSubmit(){
    console.log( this.user );

    this._rest.post('user', this.user)
             .then( (res) => {
               
               if (res['msg'] == "ok"){
                 console.log('user create ');
                 this.okShow = true;
                 
               } else {
                 console.log('msg ' + res['msg']);
                 this.errorShow = true;
               }
              })
             .catch(this.handleError);

  }

  checkCode(code){

    this._rest.get('invitation', code)
             .subscribe( (res) => {
               
               if (res['msg'] == "error"){
                 this.errorShow = true;
               }
              })
             ;
  }

  handleError(){
    console.log('error');
  }

}
