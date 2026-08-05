import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hospital {
  hospitalName="AarogyaCare";
  loggedInUser="Soham";
  doctorCount=signal(24);
  patientCount=signal(152);
  appointmentCount=signal(38);
  todayRevenue=signal(18500);
  profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200";
  role="Administrator";
  isActive=true;
  lastUpdated="Never";
    refreshDashboard(){
    this.doctorCount.set(27);
    this.patientCount.set(157);
    this.appointmentCount.set(42);
    this.lastUpdated="Just Now";
  }

  addDoctor(){
    this.doctorCount.update(value=>value+1);
  }

  resetDashboard(){
    this.doctorCount.set(26);
    this.patientCount.set(160);
    this.appointmentCount.set(38);
    this.lastUpdated="Reset";
  }


  totalPeople=computed(()=>{
    return this.doctorCount()+this.patientCount();
  })

  doctors=signal([
    {
      id:1,
      doctor:"Dr.Alok",
      speciality:"Cardiology"
    },
    {
      id:2,
      doctor:"Dr.Ashok",
      speciality:"Orthopaedics"
    },
    {
      id:3,
      doctor:"Dr.Sakshi",
      speciality:"Oncology"
    }

  ]);

  appointmentStatus=signal("Pending");
  setAppointmentStatus(status:string){
    this.appointmentStatus.set(status);
  }
}