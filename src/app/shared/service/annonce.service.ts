import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

  getAnnonces(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/annonces')
      .subscribe( {
        next: annonces => {resolve(annonces)}, 
        error: () => reject
      })
    })
  }

  getOneAnnonce(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/annonces' +id)
      .subscribe( {
        next: annonce => {resolve(annonce)},
        error: () => reject,
      })
    })
  }

  getAddAnnonce(data: Annonce): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/' + 'annonces', data)
      .subscribe( {
        next: annonce => {resolve(annonce)},
        error: () => reject,
      })
    })
  }

  getEditAnnonce(data: Annonce, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/' + `annonces/${id}`, data)
      .subscribe( {
        next: annonce => {resolve(annonce)},
        error: () => reject,
      })
    })
  }

  getDeleteAnnonce(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/' + `annonces/${id}`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
