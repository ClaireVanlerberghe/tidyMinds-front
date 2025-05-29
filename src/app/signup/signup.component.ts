import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  colors: any[] = []
  
  form = {
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    role_id: 3,
    color_code: ''
  };

  constructor(private colorService: ColorService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.getAllColors()
  }

  onColorClick(color: string) {
  this.form.color_code = color;
  }

  getAllColors() {
    this.colorService.getColors().subscribe((colors) => {
      this.colors = colors
    })
  }

  signup() {
    this.form.role_id = 3
    this.authService.signup(this.form).subscribe((user) => {
    })
  }

}
