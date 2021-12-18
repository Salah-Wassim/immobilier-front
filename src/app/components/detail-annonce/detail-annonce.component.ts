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
    this.getOneAnnonce()
  }

  getOneAnnonce(): void{
    this.annonceService.getOneAnnonce(this.id)
    .then(annonce => {this.annonce = annonce})
    .catch(err => console.log(err))
  }
}
