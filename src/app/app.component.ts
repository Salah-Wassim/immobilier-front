import { Component } from '@angular/core';
import { AuthentificationService } from './shared/service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'immobilier';

  constructor(private authentificationService: AuthentificationService){}

  ngOnInit(): void {
    this.authentificationService.loadUserFromToken()
  }

}
