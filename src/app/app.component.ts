import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { TimerDialogComponent } from './modales/timer-dialog/timer-dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, TimerDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tidyMinds';
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.checkRoute(event.url);
      }
    });
   }

   //N'affiche pas le header sur les pages login et signup
   checkRoute(url: string) {
    const noHeaderRoutes = ['/login', '/signup'];
    this.showHeader = !noHeaderRoutes.includes(url);
  }
}
