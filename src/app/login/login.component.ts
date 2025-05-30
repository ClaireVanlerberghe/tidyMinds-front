import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  colors: any[] = []
  
  form = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  login() {
    
  }

}
