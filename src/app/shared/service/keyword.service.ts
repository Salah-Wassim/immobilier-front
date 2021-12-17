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

  getAddKeyword(data:KeyWord): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + 'keywords.json', data)
      .subscribe( {
        next: keywords => {resolve(keywords)},
        error: () => reject,
      })
    })
  }

  getDeleteKeyword(id:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + `/keywords/${id}.json`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
