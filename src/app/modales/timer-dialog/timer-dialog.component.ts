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
  time = 60; // en secondes
  private intervalId: any = null;
  running = false;

   constructor(private timerDialogService: TimerDialogService) {
    this.timerDialogService.visible$.subscribe(v => this.visible = v);
  }

  startPause() {
    if (this.running) {
      clearInterval(this.intervalId);
    } else {
      this.intervalId = setInterval(() => {
        this.time--;
      }, 1000);
    }
    this.running = !this.running;
  }

  reset() {
    clearInterval(this.intervalId);
    this.time = 60;
    this.running = false;
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
    const seconds = (this.time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  close() {
    this.timerDialogService.close();
  }
}
