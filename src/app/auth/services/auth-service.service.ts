import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  signIn(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      'https://karmatechnolabsapi.up.railway.app/api/auth/signIn',
      requestBody,
      { headers }
    );
  }

  signUp(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      'https://karmatechnolabsapi.up.railway.app/api/auth/signUp',
      requestBody,
      { headers }
    );
  }

  private baseUrl = 'https://karmatechnolabsapi.up.railway.app/api';

  // constructor(private http: HttpClient) {}

  createCategory(token: string, requestBody: any): Observable<any> {
    const url = `${this.baseUrl}/category`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(url, requestBody, { headers });
  }
}
