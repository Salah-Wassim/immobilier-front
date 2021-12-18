import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bien } from '../model/bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private http: HttpClient) { }

  getBiens(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/biens')
      .subscribe( {
        next: biens => {resolve(biens)},
        error: () => reject,
      })
    })
  }

  getBien(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/biens' + id)
      .subscribe( {
        next: bien => {resolve(bien)},
        error: () => reject,
      })
    })
  }

  getAddBien(data: Bien): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/biens', data)
      .subscribe( {
        next: bien => {resolve(bien)},
        error: () => reject,
      })
    })
  }

  getEditBien(data: Bien, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/' + `biens/${id}`, data)
      .subscribe( {
        next: bien => {resolve(bien)},
        error: () => reject,
      })
    })
  }

  getDeleteBien(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/' + `biens/${id}`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
