import { Component } from '@angular/core';
import { DashboardCard } from '../../shared/dashboard-card/dashboard-card';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {
  hospitalName="AarogyaCare";
  loggedInUser="Soham";
  doctorCount=24;
  patientCount=152;
  appointmentCount=38;
  todayRevenue=18500;
  profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200";
  role="Administrator";
  isActive=true;
  lastUpdated="Never";
  refreshDashboard(){
    this.doctorCount=27;
    this.patientCount=157;
    this.appointmentCount=42;
    this.lastUpdated="Just Now";
  }

  addDoctor(){
    this.doctorCount++;
  }

  resetDashboard(){
    this.doctorCount=24;
    this.patientCount=152;
    this.appointmentCount=38;
    this.lastUpdated="Reset";
  }

  logEvent(event:MouseEvent){
    console.log(event);
  }
}
