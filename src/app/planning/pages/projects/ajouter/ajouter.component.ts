import { Component, OnInit } from '@angular/core'

import { RestService } from './../../../../services/rest.service'
import { Router } from '@angular/router';

@Component({
  selector: 'comp-projet-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.styl']
})
export class AjouterComponent implements OnInit {

  projet = {
    titre:'',
    description:''
  }


  constructor(
    private _rest:RestService,
    private _router:Router
  ) { 

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.projet)
    this._rest.post('projets/ajouter', this.projet)
      .then( (res)=>{
        if (res.msg = 'ok'){
          this.onAnnuler()
          this._router.navigateByUrl('planning/projects/projet/' + res.id);
        }
      })
  }

  onAnnuler(){
    this.projet = {
      titre:'',
      description:''
    }
  }

}
