import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
  doctorGrowth=10;
  patientGrowth=12;
}
