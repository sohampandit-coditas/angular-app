import { Component, computed } from '@angular/core';
import { DashboardCard } from '../../shared/dashboard-card/dashboard-card';
import { signal , effect} from '@angular/core';
import { ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { Hospital } from '../../core/services/hospital';
import { HighlightDirective } from '../../shared/directives/highlight';
import { TemplateRef,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard,HighlightDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})



export class Dashboard implements AfterViewInit {
  
  @ViewChild('userNameInput')
  userNameInput!:ElementRef<HTMLInputElement>;

  @ViewChild('welcomeTemplate')
  welcomeTemplate!:TemplateRef<any>;

  ngAfterViewInit(){
    this.userNameInput.nativeElement.focus();
    this.userNameInput.nativeElement.style.backgroundColor="lightyellow";
    this.viewContainer.createEmbeddedView(this.welcomeTemplate);
  }
  constructor(private viewContainer:ViewContainerRef, public hospitalService:Hospital){
    console.log("Constructor");
    effect(()=>{
      console.log('Doctor count changed',hospitalService.doctorCount());
    });

    effect(()=>{
      localStorage.setItem(
        'doctorCount',
        hospitalService.doctorCount().toString()
      );
    });

    effect(()=>{
      console.log("Total people Changed",this.hospitalService.totalPeople());
    });
  }

  ngOnInit(){
    console.log("ngOnInit");
    this.hospitalService.lastUpdated="Dashboard loaded";
  }

    logEvent(event:MouseEvent){
    console.log(event);
  }
}
