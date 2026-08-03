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
  profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200";
  role="Administrator";
  isActive=true;
}
