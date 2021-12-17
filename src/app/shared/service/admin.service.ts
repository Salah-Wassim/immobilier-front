import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin():Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/admin')
      .subscribe( {
        next: admin => {resolve(admin)},
        error: () => reject,
      })
    })
  }
}
