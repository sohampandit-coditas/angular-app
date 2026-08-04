import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
})
export class DashboardCard {
  title=input.required<string>();
  value=input.required<number>();
  refresh=output<void>();
  onRefreshClicked(){
    this.refresh.emit();
  }
}
