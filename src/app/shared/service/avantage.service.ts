import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avantage } from '../model/avantage';

@Injectable({
  providedIn: 'root'
})
export class AvantageService {

  constructor(private http: HttpClient) { }

  getAvantages(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/avantages')
      .subscribe( {
        next: avantages => {resolve(avantages)},
        error: () => reject,
      })
    })
  }

  getAvantage(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/avantages' + id)
      .subscribe( {
        next: avantage => {resolve(avantage)},
        error: () => reject,
      })
    })
  }

  getAddAvantage(data: Avantage): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/' + `avantages`, data)
      .subscribe( {
        next: avantage => {resolve(avantage)},
        error: () => reject,
      })
    })
  }

  getEditAvantage(data: Avantage, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/' + `avantages/${id}`, data)
      .subscribe( {
        next: avantage => {resolve(avantage)},
        error: () => reject,
      })
    })
  }

  getDeleteAvantage(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/' + `avantages/${id}`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
