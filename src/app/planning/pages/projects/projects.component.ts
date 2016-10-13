import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../services/rest.service'
import { UtilisateurService } from './../../../services/utilisateur.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.styl'],
  providers:[RestService]
})
export class ProjectsComponent implements OnInit {

  userInfos = {}
  projets = []

  constructor(
    private _rest:RestService,
    private _user:UtilisateurService,
    private _route:Router
  ) { }

  ngOnInit() {
    this.userInfos = this._user.user
    this.loadProjets( this.userInfos['id'] )
  }

  loadProjets( userId ){
    console.log('load projects ' + userId)
    this._rest.get('projets', userId )
      .subscribe( (res)=>{
        console.log('res', res)
        this.projets = res.projets
      })
  }

  navigateProjet(id){
    this._route.navigateByUrl('planning/projects/projet/' + id + '/mur')
  }

}
