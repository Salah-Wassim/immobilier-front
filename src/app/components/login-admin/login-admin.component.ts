import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  errorMessage: string | null = null;

  loginForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  constructor(private router: Router, private fb: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  submit(){
    this.authentificationService.getAdminLogin(this.loginForm.value)
    .then( () => {
      this.router.navigate([''])
    })
    .catch(err => {
      console.error(err)
      if(err.error?.message){
        this.errorMessage = err.error.message
      }else{
        this.errorMessage = "Erreur inattendue. Veuillez réessayer.";
      }
    })
  }

}
