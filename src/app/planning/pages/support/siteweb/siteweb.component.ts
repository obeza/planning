import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../../services/rest.service';

@Component({
  selector: 'app-siteweb',
  templateUrl: './siteweb.component.html',
  styleUrls: ['./siteweb.component.styl']
})
export class SitewebComponent implements OnInit {

  private siteweb:string;
  private sitewebDialog:Object;
  private sitewebs:any[];
  private showDialog:boolean;

  constructor(
    private _rest:RestService
  ) { }

  ngOnInit() {
    this.siteweb = '';
    this.loadSitewebs();
    this.showDialog = false;
  }

  loadSitewebs(){
    this._rest.showLoadingAlert();
    this._rest.get('siteweb')
      .subscribe( (res)=>{
        this._rest.hideLoadingAlert();
        this.sitewebs = res.siteweb;
      });
  }

  ajouterSiteweb(){

    let data = {
      id:0,
      titre : this.siteweb
    };

    this._rest.post('siteweb', data)
      .then( (res)=>{

        if( res.msg=='ok'){
          console.log('res', res);
          data.id = res.id;
          this.sitewebs.push( data );
          this.siteweb = '';
        }
        
      });
  }

  modifierFormat(key){
    console.log(key);  
    this.sitewebDialog = Object.assign({}, this.sitewebs[key] );
    this.sitewebDialog['key'] = key;
    this.showDialog = true;
  }

  fermerDialog(){
    this.showDialog = false;
  }

  sauverSiteweb(){
    console.log('save ', this.sitewebDialog);
    this._rest.post('siteweb/modifier', this.sitewebDialog)
      .then( (res)=>{
        
        this.sitewebs[ this.sitewebDialog['key'] ] = this.sitewebDialog;
        this.sitewebDialog = '';
        this.showDialog = false;

      })
  }
}
