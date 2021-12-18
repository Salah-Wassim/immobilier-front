import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/shared/service/annonce.service';
import { AvantageService } from 'src/app/shared/service/avantage.service';
import { BienService } from 'src/app/shared/service/bien.service';
import { KeywordService } from 'src/app/shared/service/keyword.service';
import { RealtorService } from 'src/app/shared/service/realtor.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {

  id: number = 0;
  biens: any = [];
  avantages: any = [];
  keywords: any = [];
  agentImmobiliers: any = [];

  annonceForm = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    secteur: ['', Validators.required],
    nbRoom: ['', Validators.required],
    description: ['', Validators.required],
    keyWord: ['', Validators.required],
    picture: ['', Validators.required],
    agentImmobilier: ['', Validators.required],
    biens: ['', Validators.required],
    avantage: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private annonceService: AnnonceService, private bienService: BienService, private avantageService: AvantageService, private keywordService: KeywordService, private realtorService: RealtorService) {
    this.route.params
    .subscribe( params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOneAnnonce()
    this.getBiens()
    this.getAvantages()
    this.getKeyword()
    this.getAgentImmobilier()
  }

  getOneAnnonce(): void{
    this.annonceService.getOneAnnonce(this.id)
    .then(annonce => {
      this.annonceForm.patchValue(annonce)
    })
    .catch(err => console.log(err))
  }

  getBiens():void{
    this.bienService.getBiens()
    .then(biens => {this.biens = biens})
    .catch(err => console.log(err))
  }
  
  getAvantages(): void{
    this.avantageService.getAvantages()
    .then(avantages => {this.avantages = avantages})
    .catch(err => console.log(err))
  }
  
  getKeyword(): void{
    this.keywordService.getKeyword()
    .then(keywords => {this.keywords = keywords})
    .catch(err => console.log(err))
  }

  getAgentImmobilier(): void{
    this.realtorService.getAgentImmobilier()
    .then(agentImmobiliers => {this.agentImmobiliers = agentImmobiliers})
    .catch(err => console.log(err))
  }

  submit(): void{
    this.annonceService.getEditAnnonce(this.annonceForm.value, this.id)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }
}
