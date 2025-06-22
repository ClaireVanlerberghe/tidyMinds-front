import { Component } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { TimerDialogService } from '../../services/timer-dialog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer-dialog',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './timer-dialog.component.html',
  styleUrl: './timer-dialog.component.scss'
})
export class TimerDialogComponent {
  visible = false;
  time = 70; // en secondes
  private intervalId: any = null;
  running = false;

  workTime: boolean = true;
  breakTime: boolean = false;
  inProgress: boolean = false;
  break: boolean = false;

  constructor(private timerDialogService: TimerDialogService) {
    this.timerDialogService.visible$.subscribe(v => this.visible = v);
  }

  openTimer() {
    this.timerDialogService.open();
  }

  startPause() {
    if (this.running) {
      this.break = true;
      clearInterval(this.intervalId);
    } else {
      this.break = false
      this.inProgress = true
      this.intervalId = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.time = 50
          //Vérification si breakTime ou si WorkTime
        }
      }, 1000);
    }
    this.running = !this.running;
  }

  reset() {
    clearInterval(this.intervalId);
    this.time = 60;
    this.running = false;
    this.inProgress = false
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
    const seconds = (this.time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  gotToBreak() {
    this.breakTime = !this.breakTime;
    this.workTime = !this.workTime;
  }

  close() {
    this.reset()
    this.inProgress = false
    this.timerDialogService.close();
  }
}
