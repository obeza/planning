import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../../../services/rest.service'
import { ProjetComponent } from './../projet.component'
import * as moment from 'moment';
import {UnitOfTime, Moment} from 'moment';
import { UtilisateurService } from './../../../../../services/utilisateur.service'

@Component({
  selector: 'app-discution',
  templateUrl: './discution.component.html',
  styleUrls: ['./discution.component.styl']
})
export class DiscutionComponent implements OnInit {

  private discution:any 
  private discutions = [] 

  constructor(
    private _projet:ProjetComponent,
    private _rest:RestService,
    private _user:UtilisateurService
  ) { }

  ngOnInit() {
    this.discution = {
      texte:'',
      user: this._user.user.prenom + " " + this._user.user.nom,
      id:0
    }

    this.loadDiscutions()
  }

  loadDiscutions(){
    this._rest.get('projet/discution/' + this._projet.projectId )
      .subscribe( res=>{
        console.log('discutions', res)
        this.discutions = res.discutions.map( res=>{
          //moment.locale('fr'); 
          res.dt_creation = moment(res.dt_creation).startOf('hour').fromNow();
          return res
        })
      })
  }

  onSubmitDiscution(){
    this._rest.post('projet/discution/' + this._projet.projectId, this.discution)
      .then( res=>{
        console.log(res)
        if ( res.msg=="ok"){
          let discution = Object.assign({}, this.discution)
          discution.id = res.id
          this.discutions = [...this.discutions, discution]
          this.discution.texte = ''
        }
          
      })
  }

}
