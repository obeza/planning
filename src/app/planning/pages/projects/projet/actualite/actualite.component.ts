import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../../../services/rest.service'
import { ProjetComponent } from './../projet.component'
import * as moment from 'moment';
import {UnitOfTime, Moment} from 'moment';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.styl']
})
export class ActualiteComponent implements OnInit {

  private actualites = []

  constructor(
    private _rest:RestService,
    private _projet:ProjetComponent,
  ) { }

  ngOnInit() {
    this.loadActu()
  }

  loadActu(){
    this._rest.get('projet/actu/' + this._projet.projectId)
      .subscribe( res=>{
        console.log('res', res)
        this.actualites = res.actualite.map(res=>{
          res.dt_creation = " le " + moment(res.dt_creation).format("DD/MM/YYYY") + " à " + moment(res.dt_creation).format("hh:mm");
          return res
        })
      })
  }

}
