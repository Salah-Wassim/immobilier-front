import { Component, OnInit } from '@angular/core';
import { BienService } from 'src/app/shared/service/bien.service';

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrls: ['./list-biens.component.css']
})
export class ListBiensComponent implements OnInit {

  biens: any = []

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.getBiens()
  }

  getBiens(): void{
    this.bienService.getBiens()
    .then(biens => {
      this.biens = biens
    })
    .catch(err => console.log(err))
  }

  delete(id:number){
    this.bienService.getDeleteBien(id)
    .then(() => {this.getBiens()})
    .catch(err => console.log)
  }
}
