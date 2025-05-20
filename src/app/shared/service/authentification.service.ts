import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPattern } from '../model/user-pattern';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) {}

  getRealtorLogin(data: any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/realtors/login-realtor', data)
      .subscribe( {
        next: (token:any) => {
          localStorage.setItem('auth', token.token),
          localStorage.setItem('role', 'realtor')
          resolve(token)
        },
        error: (err) => reject(err),
      })
    })
  }

  getAdminLogin(data:any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/admin/login-admin', data)
      .subscribe(  {
        next: (token:any) => {
          localStorage.setItem('auth', token.token)
          localStorage.setItem('role', 'admin')
          resolve(token)
        },
        error: (err) => reject(err),
      })
    })
  }

  getCurrentUser(): Observable<UserPattern> {
    const token = localStorage.getItem('auth');
    const role = localStorage.getItem('role');

    if (!token || !role) {
      throw new Error('Utilisateur non authentifié');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const endpoint = role === 'admin'
      ? 'http://localhost:3000/admin/me'
      : 'http://localhost:3000/realtors/me';

    return this.http.get<UserPattern>(endpoint, { headers });
  }
}
