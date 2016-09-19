import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RestService } from './../../services/rest.service';

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

  private errorShow:Boolean;

  constructor(
    private _router:Router,
    private _rest:RestService
  ) { }

  ngOnInit() {
      this.errorShow = false;
  }

  onSubmit(){
    console.log(this.login)

    this._rest.post('login', this.login)
      .then( (res)=>{
        console.log('res ', res);
        if ( res['msg']=='ok'){
          localStorage.setItem('token', res['token']);
          localStorage.setItem('user', JSON.stringify(res['user']));
          this._router.navigateByUrl('/planning');
        } else {
          this.errorShow = true;
        }
      })

  }

}
