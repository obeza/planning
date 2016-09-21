import { Injectable } from '@angular/core';

@Injectable()
export class UtilisateurService {

  public user = {
    prenom:'',
    nom:' ',
    id:0
  };

  constructor() { 
    this.getInfos();
  }

  getInfos(){
    let infos = JSON.parse( localStorage.getItem('user') );
    this.user = infos;
    //return this.user;
  }

}
