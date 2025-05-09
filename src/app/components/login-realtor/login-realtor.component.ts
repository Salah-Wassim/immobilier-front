import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';

@Component({
  selector: 'app-login-realtor',
  templateUrl: './login-realtor.component.html',
  styleUrls: ['./login-realtor.component.css']
})
export class LoginRealtorComponent implements OnInit {

  errorMessage: string | null = null;

  loginRealtorForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  submit(){
    this.authentificationService.getRealtorLogin(this.loginRealtorForm.value)
    .then( () => {
      this.router.navigate([''])
    })
    .catch(err => {
      console.error(err);
      if(err.error?.errorMessage){
        this.errorMessage = err.error.message
      }else{
        this.errorMessage = "Erreur inattendue. Veuillez réessayer.";
      }
    })
  }
}
