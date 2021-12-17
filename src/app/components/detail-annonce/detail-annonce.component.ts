import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from 'src/app/shared/service/annonce.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

  id: number = 0;
  annonce: any;

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOneAnnonce(this.id)
  }

  getOneAnnonce(id:number): void{
    this.annonceService.getOneAnnonce(id)
    .then(annonce => {this.annonce = annonce[0]})
    .catch(err => console.log(err))
  }
}
