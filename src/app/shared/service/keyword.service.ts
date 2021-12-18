import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyWord } from '../model/key-word';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http: HttpClient) { }

  getKeyword(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/keywords')
      .subscribe( {
        next: keywords => {resolve(keywords)},
        error: () => reject,
      })
    })
  }

  getOneKeyword(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/keywords' + id)
      .subscribe( {
        next: keyword => {resolve(keyword)},
        error: () => reject,
      })
    })
  }

  getAddKeyword(data:KeyWord): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + 'keywords.json', data)
      .subscribe( {
        next: keywords => {resolve(keywords)},
        error: () => reject,
      })
    })
  }

  getEditKeyword(data:KeyWord, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/' + `keywords/${id}`, data)
      .subscribe( {
        next: keyword => {resolve(keyword)},
        error: () => reject,
      })
    })
  }

  getDeleteKeyword(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + `keywords/${id}.json`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
