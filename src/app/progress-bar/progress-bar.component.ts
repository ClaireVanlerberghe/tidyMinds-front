import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

  @Input() title: string = 'Nom du challenge';
  @Input() current: number = 5;
  @Input() max: number = 15;
  @Input() daysRemaining: number = 5;

  get ticks(): number[] {
    const step = this.max / 3;
    return [step, step * 2, this.max];
  }

}
