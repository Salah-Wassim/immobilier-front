import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealtorService } from 'src/app/shared/service/realtor.service';

@Component({
  selector: 'app-detail-realtor',
  templateUrl: './detail-realtor.component.html',
  styleUrls: ['./detail-realtor.component.css']
})
export class DetailRealtorComponent implements OnInit {

  id: number = 0
  agentImmobilier: any = [];

  constructor(private realtorService: RealtorService, private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOneAgentImmobilier()
  }

  getOneAgentImmobilier():void{
    this.realtorService.getOneAgentImmobilier(this.id)
    .then(agentImmobilier => {this.agentImmobilier = agentImmobilier})
    .catch(err => console.error(err))
  }

  // delete(id:number): void{
  //   this.realtorService.getDeleteAgentImmobilier(id)
  //   .then(() => {this.getOneAgentImmobilier()})
  //   .catch(err => console.log(err))
  // }
}
