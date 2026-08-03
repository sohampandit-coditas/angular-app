import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';
import { Dashboard } from './features/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Sidebar,Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
