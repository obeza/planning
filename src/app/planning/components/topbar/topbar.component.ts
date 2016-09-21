import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'comp-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.styl']
})
export class TopbarComponent implements OnInit {

  public user = {
    prenom:'',
    nom:' ',
    id:0
  };
  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
    
    this.checkUser();
  }

  checkUser(){
    console.log('check user');
    let infos = JSON.parse( localStorage.getItem('user') );
    if ( infos ){
      this.user = infos;
    } else {
      this.deconnexion();
    }
  }

  deconnexion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigateByUrl('/login');
  }

}
