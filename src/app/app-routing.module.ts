import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AddRealtorComponent } from './components/add-realtor/add-realtor.component';
import { ListAnnoncesComponent } from './components/list-annonces/list-annonces.component';
import { ListItemAnnoncesComponent } from './components/list-item-annonces/list-item-annonces.component';
import { ListRealtorComponent } from './components/list-realtor/list-realtor.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {'path':'', 'component': ListAnnoncesComponent},
  {'path':'login', 'component':LoginComponent},
  {'path':'detail/:id','component': ListItemAnnoncesComponent},
  {'path':'add-realtors','component': AddRealtorComponent},
  {'path':'add-annonces','component': AddAnnonceComponent},
  {'path':'list-realtor','component': ListRealtorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
