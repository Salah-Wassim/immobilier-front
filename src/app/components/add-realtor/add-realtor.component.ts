import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RealtorService } from 'src/app/shared/service/realtor.service';

@Component({
  selector: 'app-add-realtor',
  templateUrl: './add-realtor.component.html',
  styleUrls: ['./add-realtor.component.css']
})
export class AddRealtorComponent implements OnInit {

  errorMessage: string | null = null;

  realtorForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    picture: [''],
    phoneNumber: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private realtorService: RealtorService ) { }

  ngOnInit(): void {
  }

  submit(){
    this.realtorService.getAddAgentImmobilier(this.realtorForm.value)
    .then(() => {
      this.router.navigate(['/realtors/list-realtor'])
    })
    .catch(err => {
      console.log(err)
      if(err.error?.message){
        this.errorMessage = err.error.message
      }else{
        this.errorMessage = "Erreur inattendue. Veuillez réessayer.";
      }
    })
  }
  
}
