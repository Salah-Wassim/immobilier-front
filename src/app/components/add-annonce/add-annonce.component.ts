import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/shared/service/annonce.service';
import { AvantageService } from 'src/app/shared/service/avantage.service';
import { BienService } from 'src/app/shared/service/bien.service';
import { KeywordService } from 'src/app/shared/service/keyword.service';
import { RealtorService } from 'src/app/shared/service/realtor.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

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

  constructor(private router: Router, private fb:FormBuilder, private annonceService: AnnonceService,private bienService: BienService, private avantageService: AvantageService, private keywordService: KeywordService, private realtorService: RealtorService) { }

  biens: any = [];
  avantages: any = [];
  keywords: any = [];
  agentImmobiliers: any = [];

  ngOnInit(): void {
    this.getBiens()
    this.getAvantages()
    this.getKeyword()
    this.getAgentImmobilier()
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
    this.annonceService.getAddAnnonce(this.annonceForm.value)
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch(err => console.log(err));
  }
}
