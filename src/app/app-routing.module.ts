import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AddAvantageComponent } from './components/add-avantage/add-avantage.component';
import { AddBienComponent } from './components/add-bien/add-bien.component';
import { AddKeywordComponent } from './components/add-keyword/add-keyword.component';
import { AddRealtorComponent } from './components/add-realtor/add-realtor.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DetailAnnonceComponent } from './components/detail-annonce/detail-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { EditAvantageComponent } from './components/edit-avantage/edit-avantage.component';
import { EditBienComponent } from './components/edit-bien/edit-bien.component';
import { EditKeywordComponent } from './components/edit-keyword/edit-keyword.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { ListAnnoncesComponent } from './components/list-annonces/list-annonces.component';
import { ListAvantagesComponent } from './components/list-avantages/list-avantages.component';
import { ListBiensComponent } from './components/list-biens/list-biens.component';
import { ListKeywordsComponent } from './components/list-keywords/list-keywords.component';
import { ListRealtorComponent } from './components/list-realtor/list-realtor.component';
import { EditRealtorComponent } from './components/edit-realtor/edit-realtor.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginRealtorComponent } from './components/login-realtor/login-realtor.component';
import { DetailRealtorComponent } from './components/detail-realtor/detail-realtor.component';


const routes: Routes = [
  {'path':'', 'component': ListAnnoncesComponent},
  {'path':'add-realtors','component': AddRealtorComponent},
  {'path':'add-annonces','component': AddAnnonceComponent},
  {'path':'add-avantage', 'component':AddAvantageComponent},
  {'path':'add-bien', 'component':AddBienComponent},
  {'path':'add-keyword', 'component':AddKeywordComponent},
  {'path':'add-admin', 'component': AddAdminComponent},
  {'path':'realtors/list-realtor','component': ListRealtorComponent},
  {'path':'list-avantages', 'component':ListAvantagesComponent},
  {'path':'list-biens', 'component':ListBiensComponent},
  {'path':'list-keywords', 'component':ListKeywordsComponent},
  {'path':'list-admins', 'component':ListAdminsComponent},
  {'path':'edit-annonce/:id', 'component':EditAnnonceComponent},
  {'path':'edit-avantage/:id', 'component': EditAvantageComponent},
  {'path':'edit-bien/:id', 'component': EditBienComponent},
  {'path':'edit-keyword/:id', 'component': EditKeywordComponent},
  {'path':'edit-admin/:id', 'component':EditAdminComponent},
  {'path':'realtors/edit-realtor/:id', 'component':EditRealtorComponent},
  {'path':'detail/:id', 'component': DetailAnnonceComponent},
  {'path':'profil/:id', 'component': DetailRealtorComponent},
  {'path':'login-admin', 'component':LoginAdminComponent},
  {'path':'login-realtor', 'component':LoginRealtorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
