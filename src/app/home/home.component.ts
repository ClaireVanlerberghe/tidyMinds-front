import { Component } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TimerDialogComponent } from '../modales/timer-dialog/timer-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { TimerDialogService } from '../services/timer-dialog.service';

@Component({
  selector: 'app-home',
  imports: [ProgressBarComponent, DialogModule, DynamicDialogModule,],
  providers: [DialogService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ref: DynamicDialogRef | undefined;

  constructor() {

  }


}
