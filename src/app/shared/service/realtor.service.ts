import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgentImmobilier } from 'src/app/shared/model/agent-immobilier';

@Injectable({
  providedIn: 'root'
})
export class RealtorService {

  constructor(private http: HttpClient) { }

  getAgentImmobilier(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/realtors')
      .subscribe( {
        next: realtors => {resolve(realtors)},
        error: () => reject,
      })
    })
  }

  getAddAgentImmobilier(data:AgentImmobilier): Promise<any>{
    return new Promise((resolve, reject) => {
      console.log(this.http.post('http://localhost:3000/' + 'realtors', data))
      this.http.post('http://localhost:3000/' + 'realtors', data)
      .subscribe( {
        next: realtor => {resolve(realtor)},
        error: () => reject,
      })
    })
  }

  getEditAgentImmobilier(data:AgentImmobilier, id:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/' + `realtors/${id}`, data)
      .subscribe( {
        next: realtor => {resolve(realtor)},
        error: () => reject,
      })
    })
  }

  getDeleteAgentImmobilier(id:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/' + `/realtors/${id}`)
      .subscribe( {
        next: () => {resolve(true)},
        error: () => reject,
      })
    })
  }
}
