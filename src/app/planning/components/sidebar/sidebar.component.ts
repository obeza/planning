import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']
})
export class SidebarComponent implements OnInit {

    private menu = [
        { 
            titre:"Accueil",
            lien:"/planning",
            active:true
        },
        { 
            titre:"Calendrier",
            lien:"/planning/calendrier",
            active:true
        },
        { 
            titre:"Historique",
            lien:"/planning/historique",
            active:true
        },
        { 
            titre:"Commerciaux",
            lien:"/planning/comptes",
            active:true
        },
        { 
            titre:"Siteweb",
            lien:"/planning/siteweb",
            active:true
        }
          
                        
    ];

    private menuAdmin = [
        { 
            titre:"Utilisateurs",
            lien:"/planning/utilisateurs",
            active:false
        },
        { 
            titre:"Supports",
            lien:"/planning/support/config",
            active:false
        }
    ]
    

    private userInfos:{};

  constructor() { }

  ngOnInit() {
      this.loadUserInfos();
  }

  loadUserInfos(){
    this.userInfos = JSON.parse(localStorage.getItem('user'));
    console.log( this.userInfos );
    if ( this.userInfos ){
        if (this.userInfos['groupe']=='admin'){
            console.log('admin detect');
            this.menu = this.menu.concat( this.menuAdmin );
        }
    }
      
  }

}
