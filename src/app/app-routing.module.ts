import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AddAvantageComponent } from './components/add-avantage/add-avantage.component';
import { AddBienComponent } from './components/add-bien/add-bien.component';
import { AddKeywordComponent } from './components/add-keyword/add-keyword.component';
import { AddRealtorComponent } from './components/add-realtor/add-realtor.component';
import { DetailAnnonceComponent } from './components/detail-annonce/detail-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { EditAvantageComponent } from './components/edit-avantage/edit-avantage.component';
import { EditBienComponent } from './components/edit-bien/edit-bien.component';
import { EditKeywordComponent } from './components/edit-keyword/edit-keyword.component';
import { ListAnnoncesComponent } from './components/list-annonces/list-annonces.component';
import { ListAvantagesComponent } from './components/list-avantages/list-avantages.component';
import { ListBiensComponent } from './components/list-biens/list-biens.component';
import { ListKeywordsComponent } from './components/list-keywords/list-keywords.component';
import { ListRealtorComponent } from './components/list-realtor/list-realtor.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {'path':'', 'component': ListAnnoncesComponent},
  {'path':'login', 'component':LoginComponent},
  {'path':'add-realtors','component': AddRealtorComponent},
  {'path':'add-annonces','component': AddAnnonceComponent},
  {'path':'add-avantage', 'component':AddAvantageComponent},
  {'path':'add-bien', 'component':AddBienComponent},
  {'path':'add-keyword', 'component':AddKeywordComponent},
  {'path':'list-realtor','component': ListRealtorComponent},
  {'path':'list-avantages', 'component':ListAvantagesComponent},
  {'path':'list-biens', 'component':ListBiensComponent},
  {'path':'list-keywords', 'component':ListKeywordsComponent},
  {'path':'edit-annonce/:id', 'component':EditAnnonceComponent},
  {'path':'edit-avantage/:id', 'component': EditAvantageComponent},
  {'path':'edit-bien/:id', 'component': EditBienComponent},
  {'path':'edit-keyword/:id', 'component': EditKeywordComponent},
  {'path':'detail/:id', 'component': DetailAnnonceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
