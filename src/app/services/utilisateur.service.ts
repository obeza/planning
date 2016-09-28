import { Injectable } from '@angular/core';

@Injectable()
export class UtilisateurService {

  public user = {
    prenom:'',
    nom:' ',
    id:0
  };

  constructor() { 
    this.setInfos();
  }

  setInfos(){
    let infos = JSON.parse( localStorage.getItem('user') );
    this.user = infos;
    console.log('user get infos')
    //return this.user;
  }

}
