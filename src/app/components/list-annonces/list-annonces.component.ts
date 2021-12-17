import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/shared/service/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {

  annonces: any[] = [];

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.getAnnonces()
  }

  getAnnonces(): void{
    this.annonceService.getAnnonces()
    .then(annonces => {this.annonces = annonces})
    .catch(err => console.log(err))
  }
}
