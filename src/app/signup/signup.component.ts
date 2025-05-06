import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  colors: any[] = []

  lastName: string = '';
  firstName: string = '';
  email: string = '';
  password: string = '';
  selectedColor: string = '';


  constructor(private colorService: ColorService) {

  }

  ngOnInit(): void {
    this.getAllColors()
    console.log('colors', this.selectedColor)
  }

  getAllColors() {
    this.colorService.getColors().subscribe((colors) => {
      this.colors = colors
    })
  }

  signup() {
    console.log('test récupération lastName', this.lastName)
  }

}
