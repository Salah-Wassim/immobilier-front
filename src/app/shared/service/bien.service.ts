import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
