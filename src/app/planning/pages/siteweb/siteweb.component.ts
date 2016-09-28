import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../services/rest.service';
import { UtilisateurService } from './../../../services/utilisateur.service';

@Component({
  selector: 'app-siteweb',
  templateUrl: './siteweb.component.html',
  styleUrls: ['./siteweb.component.styl']
})
export class SitewebComponent implements OnInit {

  private sitewebs = [];
  private favoris= [];
  private userId:any;

  constructor(
    private _rest:RestService,
    private _user:UtilisateurService
  ) { }

  ngOnInit() {
    this.loadSiteWebs()
  }

  loadSiteWebs(){
    this.userId = this._user.user.id
    
    this._rest.get('favoris/config', this.userId)
      .subscribe( (res)=>{
        this.sitewebs = res.siteweb
        let key = 0
        res.siteweb.map( (res)=>{
          res.key = key
          if (res.select)
            this.favoris.push( res )
          
          console.log('key' , key)
          key ++
        })
        
      })
  }

  ajouterSiteweb(key){
    this.favoris.push( this.sitewebs[key] );
    this.sitewebs[key].select = true;
    this.sauverFavoris()
  }

  supprimerSiteweb(key){
    console.log(key);
    this.sitewebs[ this.favoris[key].key ].select = false;
    this.favoris.splice(key, 1);
    this.sauverFavoris();
  }

  sauverFavoris(){
  let favoris = this.favoris.map( res => res.id );
  this._rest.post('favoris/config/' + this.userId, favoris)
    .then( (res)=>{
      console.log('res', res)
    })  
  }

}
