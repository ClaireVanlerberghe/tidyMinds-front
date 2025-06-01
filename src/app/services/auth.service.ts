import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  signup(form: {}): Observable<any[]> {
    const params = form
    return this.http.post<any[]>(`${this.apiUrl}/signup`, params);
    }

  login(form: {}): Observable<any> {
    const params = form
    return this.http.post<any>(`${this.apiUrl}/login`, params).pipe(
      tap((response) => {
        if (response.token) {
          console.log('response', response.user.email)
          localStorage.setItem('token', response.token); 
          localStorage.setItem('user', response.user.email);
        }
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
