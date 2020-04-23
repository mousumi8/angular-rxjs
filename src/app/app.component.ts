import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import { Subscription } from 'rxjs';
import {startWith, switchMap} from "rxjs/operators";
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit,OnDestroy{
  timeInterval: Subscription;
  title = 'Polling in angular';
  status:any;
  constructor(private appService:AppService){}
  
  ngOnInit(): void {
    this.timeInterval = interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.appService.getDeliveryStatus())
    ).subscribe(res => this.status = res.body['completed'],
      err => console.log('HTTP Error', err));
  }
;
  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
  
}
