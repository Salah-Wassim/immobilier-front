import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

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
        error: (err) => reject(err),
      })
    })
  }

  getOneAdmin(id:number):Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/admin/' + id)
      .subscribe( {
        next: admin => {resolve(admin)},
        error: (err) => reject(err),
      })
    })
  }

  addAdmin(data: Admin): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/admin/new-admin', data)
      .subscribe({
        next: admin => {resolve(admin)},
        error: (err) => reject(err)
      })
    })
  }

  editAdmin(data:Admin, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put(`http://localhost:3000/admin/edit-admin/${id}`, data)
      .subscribe({
        next: admin => {resolve(admin)},
        error: (err) => reject(err),
      })
    })
  }

  deleteAdmin(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/admin/delete-admin/' + id)
      .subscribe({
        next: () => resolve(true),
        error: (err) => reject(err),
      })
    })
  }
}
