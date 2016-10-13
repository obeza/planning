import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.styl']
})
export class ProjetComponent implements OnInit {

  public projectId = 0

  private tabMenu = [
    {
      titre:'Mur',
      lien:'mur'
    },
    {
      titre:'Discution',
      lien:'discution'
    },
    {
      titre:'Fichier',
      lien:'fichier'
    },
    {
      titre:'Document',
      lien:'document'
    },
    {
      titre:'Actualité',
      lien:'actualite'
    }
  ]
  

  constructor(
    private _aRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectId = this._aRoute.snapshot.params['id']
  }


}
