import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../../services/rest.service';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.styl']
})
export class FormatsComponent implements OnInit {

  private format:string;
  private formatDialog:Object;
  private formats:any[];
  private showDialog:boolean;

  constructor(
    private _rest:RestService
  ) { }

  ngOnInit() {
    this.format = '';
    this.loadFormats();
    this.showDialog = false;
  }

  loadFormats(){
    this._rest.showLoadingAlert();
    this._rest.get('formats')
      .subscribe( (res)=>{
        this._rest.hideLoadingAlert();
        this.formats = res.formats;
      });
  }

  ajouterFormat(){

    let data = {
      id:0,
      titre : this.format
    };

    this._rest.post('format', data)
      .then( (res)=>{

        if( res.msg=='ok'){
          console.log('res', res);
          data.id = res.id;
          this.formats.push( data );
          this.format = '';
        }
        
      });
  }

  modifierFormat(key){
    console.log(key);  
    this.formatDialog = Object.assign({}, this.formats[key] );
    this.formatDialog['key'] = key;
    this.showDialog = true;
  }

  sauverFormat(){
    console.log('save ', this.formatDialog);
    this._rest.post('format/modifier', this.formatDialog)
      .then( (res)=>{
        
        this.formats[ this.formatDialog['key'] ] = this.formatDialog;
        this.formatDialog = '';
        this.showDialog = false;

      })
  }

  fermerDialog(){
    this.showDialog = false;
  }
}
