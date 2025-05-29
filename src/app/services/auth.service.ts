import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
