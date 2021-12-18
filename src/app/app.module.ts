import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ListAnnoncesComponent } from './components/list-annonces/list-annonces.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { JwtInterceptorInterceptor } from './_helpers/jwt-interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRealtorComponent } from './components/add-realtor/add-realtor.component';
import { DetailAnnonceComponent } from './components/detail-annonce/detail-annonce.component';
import {MatTableModule} from '@angular/material/table';
import { ListRealtorComponent } from './components/list-realtor/list-realtor.component';
import { LoginComponent } from './components/login/login.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { EditAvantageComponent } from './components/edit-avantage/edit-avantage.component';
import { EditBienComponent } from './components/edit-bien/edit-bien.component';
import { EditKeywordComponent } from './components/edit-keyword/edit-keyword.component';
import { AddAvantageComponent } from './components/add-avantage/add-avantage.component';
import { AddBienComponent } from './components/add-bien/add-bien.component';
import { AddKeywordComponent } from './components/add-keyword/add-keyword.component';
import { ListAvantagesComponent } from './components/list-avantages/list-avantages.component';
import { ListBiensComponent } from './components/list-biens/list-biens.component';
import { ListKeywordsComponent } from './components/list-keywords/list-keywords.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListAnnoncesComponent,
    AddAnnonceComponent,
    AddRealtorComponent,
    DetailAnnonceComponent,
    ListRealtorComponent,
    LoginComponent,
    EditAnnonceComponent,
    EditAvantageComponent,
    EditBienComponent,
    EditKeywordComponent,
    AddAvantageComponent,
    AddBienComponent,
    AddKeywordComponent,
    ListAvantagesComponent,
    ListBiensComponent,
    ListKeywordsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
