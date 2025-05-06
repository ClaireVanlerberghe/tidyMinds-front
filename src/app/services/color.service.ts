import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private apiUrl = 'http://localhost:3000/colors';

  constructor(private http: HttpClient) {}

  getColors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getColors`);
  }
}