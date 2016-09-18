import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  private login = {
    email: '',
    passe: ''
  };

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.login)
    this._router.navigateByUrl('/planning');
  }

}
