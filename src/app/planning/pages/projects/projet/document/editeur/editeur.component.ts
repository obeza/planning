import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'comp-projet-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.styl']
})
export class EditeurComponent implements OnInit {

  text: string = '<div>Hey we are testing Froala Editor</div>';
  editor: any;

  froalaOptions: any = {
    height: 300
  };

  private document:any = {
    id:0,
    titre:'',
    texte:''
  }
  constructor() { }

  ngOnInit() {
  }



}
