import { Component, OnInit } from '@angular/core';

import { RestService } from './../../../services/rest.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.styl']
})
export class UtilisateursComponent implements OnInit {

  private users=[];
  private user = {
    prenom:'',
    nom:'',
    email:'',
    groupe:'',
    statut:''
  };
  private userSelectId = 0;
  private showDialog:Boolean;

  constructor(
    private _rest:RestService
  ) { }

  ngOnInit() {
    this.loadUser();
    this.showDialog = false;
  }

  loadUser(){
    this._rest.getList('users')
      .subscribe( (res)=>{
        //console.log('users', res);
        this.users = res.users;
      })
  }

  modifierUser(id){
    //console.log( this.users[id] );
    this.userSelectId = id;
    this.user = Object.assign({}, this.users[id] );
    //console.log(this.user);
    this.showDialog = true;
  }

  onSubmit(){
    //console.log(this.user);
    
    this._rest.post('admin/user', this.user)
      .then( (res)=>{
        console.log('res', res);
        if (res['msg']=='ok'){
          this.users[ this.userSelectId ] = Object.assign({}, this.user );
          this.showDialog = false;
        } else {
          console.log('error');
        }
        
      });
  }

  fermerDialog(){
    this.showDialog = false;
  }

}
