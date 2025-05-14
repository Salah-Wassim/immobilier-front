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
      this.http.get('http://localhost:3000/realtors/list-realtors')
      .subscribe( {
        next: realtors => {resolve(realtors)},
        error: (err) => reject(err),
      })
    })
  }

  getOneAgentImmobilier(id: number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + `realtors/realtor/${id}`)
      .subscribe( {
        next: agentImmobilier => {resolve(agentImmobilier)},
        error: (err) => reject(err),
      })
    })
  }

  getAddAgentImmobilier(data:AgentImmobilier): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/realtors/' + 'add-realtors', data)
      .subscribe( {
        next: realtor => {resolve(realtor)},
        error: (err) => reject(err),
      })
    })
  }

  getEditAgentImmobilier(data:AgentImmobilier, id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/' + `realtors/edit-realtor/${id}`, data)
      .subscribe( {
        next: realtor => {resolve(realtor)},
        error: (err) => reject(err),
      })
    })
  }

  getDeleteAgentImmobilier(id:number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/' + `realtors/${id}`)
      .subscribe( {
        next: () => {resolve(true)},
        error: (err) => reject(err),
      })
    })
  }
}
