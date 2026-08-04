import { Component, computed } from '@angular/core';
import { DashboardCard } from '../../shared/dashboard-card/dashboard-card';
import { signal , effect} from '@angular/core';
import { ViewChild,ElementRef,AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})



export class Dashboard implements AfterViewInit {
  
  @ViewChild('userNameInput')
  userNameInput!:ElementRef<HTMLInputElement>;

  ngAfterViewInit(){
    this.userNameInput.nativeElement.focus();
    this.userNameInput.nativeElement.style.backgroundColor="lightyellow";
  }
  constructor(){
    console.log("Constructor");
    effect(()=>{
      console.log('Doctor count changed',this.doctorCount());
    });

    effect(()=>{
      localStorage.setItem(
        'doctorCount',
        this.doctorCount().toString()
      );
    });

    effect(()=>{
      console.log("Total people Changed",this.totalPeople());
    });
  }
  ngOnInit(){
    console.log("ngOnInit");
    this.lastUpdated="Dashboard loaded";
  }
  hospitalName="AarogyaCare";
  loggedInUser="Soham";
  doctorCount=signal(24);
  patientCount=signal(152);
  appointmentCount=38;
  todayRevenue=18500;
  profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200";
  role="Administrator";
  isActive=true;
  lastUpdated="Never";
  refreshDashboard(){
    this.doctorCount.set(27);
    this.patientCount.set(157);
    this.appointmentCount=42;
    this.lastUpdated="Just Now";
  }

  addDoctor(){
    this.doctorCount.update(value=>value+1);
  }

  resetDashboard(){
    this.doctorCount.set(26);
    this.patientCount.set(160);
    this.appointmentCount=38;
    this.lastUpdated="Reset";
  }

  logEvent(event:MouseEvent){
    console.log(event);
  }

  totalPeople=computed(()=>{
    return this.doctorCount()+this.patientCount();
  })

  hospitalStatus=computed(()=>{
    if(this.doctorCount()>30){
      return "Enough Doctors"
    };

    return "Needs Hiring";
  })
}
