import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  getRealtorLogin(data: any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/realtor/login', data)
      .subscribe( {
        next: (token:any) => {
          localStorage.setItem('auth', token.token)
          resolve(token)
        },
        error: () => reject,
      })
    })
  }

  getAdminLogin(data:any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/admin/login', data)
      .subscribe(  {
        next: (token:any) => {
          localStorage.setItem('auth', token.token)
          resolve(token)
        },
        error: () => reject,
      })
    })
  }
}
