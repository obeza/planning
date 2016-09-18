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
            lien:"/planning"
        },
        { 
            titre:"Planning",
            lien:"/planning/planning"
        },
        { 
            titre:"Commerciaux",
            lien:"/planning/commerciaux"
        },
        { 
            titre:"Utilisateurs",
            lien:"/planning/utilisateurs"
        }                
    ]

  constructor() { }

  ngOnInit() {
  }

}
