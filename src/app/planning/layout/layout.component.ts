import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.styl']
})
export class LayoutComponent implements OnInit {

    public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 10
}

  constructor() { }

  ngOnInit() {
  }

}
