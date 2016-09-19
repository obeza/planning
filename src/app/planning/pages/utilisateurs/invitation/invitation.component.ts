import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NotificationsService } from 'angular2-notifications';

import { RestService } from './../../../../services/rest.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.styl']
})
export class InvitationComponent implements OnInit {

  private email:string;

  constructor(
    private _http:Http,
    private _notif: NotificationsService,
    private _rest:RestService
  ) { 
    this.email= '';
  }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log( this.email );
    let data = {
      email : this.email
    }

    this._rest.post('invitation', data)
             .then( (res) => {
               
               if (res['msg'] == "ok"){
                 //console.log('shoot ');
                 this.email = '';
                 this._notif.success( 'Information',"L'invitation a été envoyée avec succès.");
               }
              })
             .catch(this.handleError);
  }

  handleError(){
    console.log('error');
  }

}
