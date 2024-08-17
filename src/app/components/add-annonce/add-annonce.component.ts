import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/shared/service/annonce.service';
import { AvantageService, AvantageInterface } from 'src/app/shared/service/avantage.service';
import { BienService } from 'src/app/shared/service/bien.service';
import { KeywordService, Keyword } from 'src/app/shared/service/keyword.service';
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
    keyWordIds: [[], Validators.required],
    picture: [''],
    AgentImmobilierId: ['', Validators.required],
    BienId: ['', Validators.required],
    avantageIds: [[], Validators.required],
  })

  constructor(private router: Router, private fb:FormBuilder, private annonceService: AnnonceService,private bienService: BienService, private avantageService: AvantageService, private keywordService: KeywordService, private realtorService: RealtorService) { }

  BienIds: any = [];
  avantages: AvantageInterface[] = [];
  keyWords: Keyword[] = [];
  AgentImmobilierIds: any = [];

  ngOnInit(): void {
    this.getBiens()
    this.getAvantages()
    this.getKeyword()
    this.getAgentImmobilier()
  }

  getBiens():void{
    this.bienService.getBiens()
    .then(BienIds => {this.BienIds = BienIds})
    .catch(err => console.log(err))
  }
  
  getAvantages(): void{
    this.avantageService.getAvantages()
    .then(avantages => {this.avantages = avantages})
    .catch(err => console.log(err))
  }
  
  getKeyword(): void{
    this.keywordService.getKeyword()
    .then(keyWords => {this.keyWords = keyWords})
    .catch(err => console.log(err))
  }

  getAgentImmobilier(): void{
    this.realtorService.getAgentImmobilier()
    .then(AgentImmobilierIds => {this.AgentImmobilierIds = AgentImmobilierIds})
    .catch(err => console.log(err))
  }

  submit(): void{
    const formValue = this.annonceForm.value
    this.annonceService.getAddAnnonce(formValue)
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch(err => console.log(err));
  }
}
