import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {UnitOfTime, Moment} from 'moment';
import {
  CalendarEvent,
  CalendarEventAction
} from 'angular2-calendar';
import { RestService } from './../../../services/rest.service';
import { UtilisateurService } from './../../../services/utilisateur.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.styl'],
  providers:[  RestService ]
})
export class CalendrierComponent implements OnInit {

  private userId = 0

  private sites = []
  private formats = []
  private comptes = []

  private selectedSite
  private selectedFormat
  private loadingFormats
  private reservationDialog:Boolean
  private impossible:Boolean = false
  private formatsSelect = []

  private reservation = {
    title:'',
    start:'',
    end:'',
    statut:'',
    compte:null,
    siteweb:null,
    format:null
  }

  private events = [];
  constructor(
    private _rest:RestService,
    private _user:UtilisateurService
  ) { }

  ngOnInit() {
    console.log( moment().startOf('day').subtract(1, 'day').toDate() )
    this.userId = this._user.user.id
    this.loadFavoris()
    this.loadComptes()
    this.reservationDialog = false
  }

  loadFavoris(){
    this._rest.get('favoris/' + this.userId )
      .subscribe( (res)=>{
        console.log('res', res)
        this.sites = res.siteweb
        this.selectedSite = 0
        this.formats = res.formats
        this.formatsSelect = this.formats[0]
        this.selectedFormat = this.formatsSelect[0].id
        //this.loadFormats( this.selectedSite )
        console.log('format', this.selectedFormat)
        this.loadReservations(this.selectedFormat)
      })
  }

/*  setFormats(siteId){
    this.formatsSelect = 
  }*/

/*  loadFormats(sitewebId){
    this.loadingFormats = true;
    this._rest.get('favoris/formats/' + sitewebId)
      .subscribe( (res)=>{
        this.formats = res.formats
        console.log('res',res)
        this.reservation.format = this.formats[0].id
        this.loadingFormats = false;
      })
  }*/

  loadReservations(format){
    this._rest.get('reservations/' + format)
      .subscribe( (res)=>{
        this.events = res.reservations.map( (res)=>{
          // format date de début
          res.start = moment(res.start).toDate();
          // format date de fin
          res.end = moment(res.end).toDate();
          // map les actions de click
          res.actions = this.actions;
          res.dateHumain = " du " + moment(res.start).format("DD/MM/YYYY") + " au " + moment(res.end).format("DD/MM/YYYY");
          if (res.statut=="option")
            res.color = colors.blue;
          if (res.statut=="ferme")
            res.color = colors.red;
          return res;
        })
        console.log('events', this.events)
      });
  }

  private loadComptes(){
    this._rest.get('compte/favoris/' + this.userId)
      .subscribe( (res)=>{
        console.log('comptes', res)
        this.comptes = res.comptes
        //this.reservation.compte = this.comptes[0].id
      })
  }

  private view: UnitOfTime = 'month';

  private viewDate: Date = new Date();

  private actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil">pencil</i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      console.log('Edit event', event['id']);
    }
  }, {
    label: '<i class="fa fa-fw fa-times">xXx</i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
    }
  }];

/*
  private events = [{
    start: moment('2016-09-01').toDate(),
    end: moment('2016-09-03').toDate(),
    title: 'A 3 day event',
    color: colors.red,
    id:12,
    actions: this.actions
  }];*/

  private activeDayIsOpen: boolean = false;

  increment(): void {
    this.viewDate = moment(this.viewDate).add(1, this.view).toDate();
  }

  decrement(): void {
    this.viewDate = moment(this.viewDate).subtract(1, this.view).toDate();
  }

  today(): void {
    this.viewDate = new Date();
  }

  dayClicked({date, events}: {date: Moment, events: CalendarEvent[]}): void {
    if (moment(date).startOf('month').isSame(moment(this.viewDate).startOf('month'))) {
      if (
        (moment(this.viewDate).startOf('day').isSame(date.clone().startOf('day')) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date.toDate();
      }
    }
  }
  onChangeSite(event){
    console.log('event', this.selectedSite)
    //this.loadFormats( event )
    this.formatsSelect = this.formats[event]
    this.selectedFormat = this.formatsSelect[0].id
  }

  private showDialog(){
/*    this.reservation.statut = "option"
    this.reservation.compte = this.comptes[0].id
    this.reservation.siteweb = this.sites[ this.selectedSite ]
    this.reservation.format = this.selectedFormat*/
    
    this.reservation = {
      title:'',
      start:'',
      end:'',
      statut:'option',
      compte: this.comptes[0].id,
      siteweb: this.sites[ this.selectedSite ].id,
      format: this.selectedFormat
    }
    this.reservationDialog = true
  }

  private hideDialog(){
    this.reservation = {
      title:'',
      start:'',
      end:'',
      statut:'',
      compte:0,
      siteweb:null,
      format:null
    }
    this.reservationDialog = false
  }
  
  private onSubmit(){
    console.log('reservation ', this.reservation)
    this._rest.post('reservation', this.reservation)
      .then( (res)=>{
        console.log('res', res)
        if (res.msg=='ok'){
          
          let color = ''
          if ( this.reservation['color'] =='option')
            color = colors.blue
          else
            color = colors.red

          let event = {
                start: moment( this.reservation.start ).toDate(),
                end: moment( this.reservation.end ).toDate(),
                title: this.reservation.title,
                color: color,
                id: res.id,
                actions: this.actions
          }
          this.events = [ ...this.events, event]
          this.reservationDialog = false
        }
        if (res.msg=='impossible'){
          this.impossible = true
        }
        
      })

  }

  onChangeformat($event){
    console.log($event)
    this.loadReservations($event)
  }

}

/*
  private events = [{
    start: moment('2016-09-01').toDate(),
    end: moment('2016-09-03').toDate(),
    title: 'A 3 day event',
    color: colors.red,
    id:12,
    actions: this.actions
  }];*/