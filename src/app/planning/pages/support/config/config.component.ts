import { Component, OnInit } from '@angular/core';
import { RestService } from './../../../../services/rest.service';
import {DndModule} from 'ng2-dnd';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.styl']
})
export class ConfigComponent implements OnInit {

  private loading = {
    formats:false,
    selected:false
  };
  private sitewebs:any[];
  private configSelect = {
    siteweb:{},
    formats:[
    ]
  };
  private selectedWebId: any;

  private choixFormat:any[];

  constructor(
    private _rest:RestService
  ) {



   }

  ngOnInit() {
    this.loadSitewebs();

  }


  private loadSitewebs(){
    
    this._rest.get('siteweb')
      .subscribe( (res)=>{ 
        this.sitewebs = res.siteweb;
        this.configSelect.siteweb = this.sitewebs[0];
        this.selectedWebId = this.configSelect.siteweb['id'];
        this.loadFormats( this.configSelect.siteweb['id'] );
        
      });
  }

  transferDataSuccess($event) {
    console.log('transfer ...', $event);  
    let key = $event.dragData;
    this.choixFormat[key].select=true;
    this.choixFormat[key].key=key;
    this.configSelect.formats.push( this.choixFormat[key] );

    this.sauverFormats()
  }

  private supprimerFormat(key){

    this.choixFormat[ this.configSelect.formats[key].key ].select = false;
    this.configSelect.formats.splice(key, 1);
    this.sauverFormats()
  }

  sauverFormats(){
    this.loading.selected = true;
    let data = {
      sitewebId : this.selectedWebId,
      formatIds:[] 
    };
    data.formatIds = this.configSelect.formats.map( res=> res.id);
    console.log( data );
    this._rest.post('support/config/' + data.sitewebId , data.formatIds )
      .then( (res)=>{
        this.loading.selected = false;
      });
  }

  private loadFormats(sitewebId){
    this.loading.formats = true;
    this.choixFormat = [];
    this._rest.get('support/config', sitewebId)
      .subscribe( (res)=>{

        this.choixFormat = res.formats;
        this.configSelect.formats = [];
        let key = 0;
        res.formats.map( (res)=> {
          res.key = key;
          if ( res.select){           
            this.configSelect.formats.push( res );
          }
          key ++;
            
        });
        this.loading.formats = false;
      })
  }

  onChange($event){
    //this.configSelect.siteweb['id'] = $event;
    console.log("id", this.selectedWebId);
    
    this.loadFormats($event);
  }

}
