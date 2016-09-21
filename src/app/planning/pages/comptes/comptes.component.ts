import { Component, OnInit, style } from '@angular/core';

import { RestService } from './../../../services/rest.service';
import { LayoutComponent } from  './../../layout/layout.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { UtilisateurService } from './../../../services/utilisateur.service';


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.styl'],
  providers:[ RestService, LayoutComponent, UtilisateurService ],
})
export class ComptesComponent implements OnInit {

  private comptes = [];
  private favoris = [];

  private compte = {
    prenom:'',
    nom:'',
    email:''
  };

  private compteDialog = false;
  private showError = false;

  private form:any;

  constructor(
    private _rest:RestService,
    private _layout:LayoutComponent,
    private _user:UtilisateurService
  ) { }

  ngOnInit() {
    this.loadComptes();
    this.form = new FormGroup({
       key: new FormControl()
      });

  }
  

  loadComptes(){
    this._rest.get('comptes', this._user.user.id)
      .subscribe( (res)=>{
        console.log( res );
        let comptes = res.comptes;
        comptes.map( ((compte) => {
          if ( compte.favoris==1 )
            this.favoris.push( compte );
          else
            this.comptes.push( compte );
        }));

      })
  }

  addFavoris(){
    
    let newFavoris = [];
    this.comptes.map( ((compte) => {
      if ( compte.selectA )
        newFavoris.push( compte.id );
    }));

    this.favoris.map( ((favori) => {
        newFavoris.push( favori.id );
    }));

    console.log('newFavoris', newFavoris);
    let id = this._user.user.id;

    let data = {
      userId: id,
      comptes: newFavoris
    }
    this._rest.post('compte/favoris', data)
      .then( (res) => {
        
        if ( res['msg']=='ok'){
          console.log('msg', res);
          //let comptes = Object.assign({}, this.comptes );
          let comptes = [];
          this.comptes.map( ((compte) => {
            if ( compte.selectA==1 )
              this.favoris.push( compte );        
            else
              comptes.push( compte );
          }));
          this.comptes = comptes; 
        }
        
      });
  }

  suppFavoris(){
    
    let newFavoris = [];
    this.favoris.map( ((favori) => {
      if ( !favori.selectB )
        newFavoris.push( favori.id );
    }));
 
    console.log('newFavoris', newFavoris);
    let id = this._user.user.id;

    let data = {
      userId: id,
      comptes: newFavoris
    }
    this._rest.post('compte/favoris', data)
      .then( (res) => {
        
        if ( res['msg']=='ok'){
          console.log('msg', res);
          //let comptes = Object.assign({}, this.comptes );
          let favoris = [];
          this.favoris.map( ((favori) => {
            if ( favori.selectB==1 ){
              favori.selectB = 0;
              this.comptes.push( favori );  
            }                  
            else
              favoris.push( favori );
          }));
          this.favoris = favoris; 
        }
        
      });
  }

  showDialog(){
    this.compteDialog = true;
  }

  hideDialog(){
    this.compteDialog = false;
  }

  onSubmit(){
    console.log( this.compte );
    this._layout.showLoadingAlert();
    this._rest.post('compte', this.compte )
      .then( (res)=>{
        console.log('res', res);

        if (res['msg']=='error'){
          this.showError = true;
          this._layout.hideLoadingAlert();
        }


        if ( res['msg']=='ok'){
          this._layout.hideLoadingAlert();
          this.hideDialog();
          this.compte = {
            prenom:'',
            nom:'',
            email:''
          };
        }

        
      });
  }

}
