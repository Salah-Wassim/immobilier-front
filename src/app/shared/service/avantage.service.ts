import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
