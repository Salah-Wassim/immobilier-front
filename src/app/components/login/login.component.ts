import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    .catch(err => console.log(err))
  }

}
