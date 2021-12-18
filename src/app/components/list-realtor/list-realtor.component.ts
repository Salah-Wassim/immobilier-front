import { Component, OnInit } from '@angular/core';
import { RealtorService } from 'src/app/shared/service/realtor.service';

@Component({
  selector: 'app-list-realtor',
  templateUrl: './list-realtor.component.html',
  styleUrls: ['./list-realtor.component.css']
})
export class ListRealtorComponent implements OnInit {

  agentImmobiliers: any = [];

  constructor(private realtorService: RealtorService) { }

  ngOnInit(): void {
    this.getAgentImmobilier();
  }

  getAgentImmobilier(): void{
    this.realtorService.getAgentImmobilier()
    .then(agentImmobiliers => {this.agentImmobiliers = agentImmobiliers})
    .catch(err => console.log(err))
  }

  delete(id:number): void{
    this.realtorService.getDeleteAgentImmobilier(id)
    .then(() => {this.getAgentImmobilier()})
    .catch(err => console.log(err))
  }
}
