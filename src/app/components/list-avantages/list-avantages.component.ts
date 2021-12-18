import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AvantageService } from 'src/app/shared/service/avantage.service';

@Component({
  selector: 'app-list-avantages',
  templateUrl: './list-avantages.component.html',
  styleUrls: ['./list-avantages.component.css']
})
export class ListAvantagesComponent implements OnInit {

  avantages: any[] = []

  constructor(private avantageService: AvantageService) { }

  ngOnInit(): void {
    this.getAvantages()
  }

  getAvantages():void {
    this.avantageService.getAvantages()
    .then(avantages => {
      this.avantages = avantages
    })
    .catch(err => console.log(err))
  }

  delete(id:number): void{
    this.avantageService.getDeleteAvantage(id)
    .then(() => {this.getAvantages()})
    .catch(err => console.log(err))
  }
}
