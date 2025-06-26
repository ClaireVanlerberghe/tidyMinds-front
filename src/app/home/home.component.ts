import { Component } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ProgressBarComponent, DialogModule, DynamicDialogModule, CheckboxModule, FormsModule],
  providers: [DialogService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ref: DynamicDialogRef | undefined;

  checked: boolean = false;

  constructor() {

  }


}
