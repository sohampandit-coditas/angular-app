import { Component, computed } from '@angular/core';
import { DashboardCard } from '../../shared/dashboard-card/dashboard-card';
import { signal } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {
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
