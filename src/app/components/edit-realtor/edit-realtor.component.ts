import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RealtorService } from 'src/app/shared/service/realtor.service';


@Component({
  selector: 'app-edit-realtor',
  templateUrl: './edit-realtor.component.html',
  styleUrls: ['./edit-realtor.component.css']
})
export class EditRealtorComponent implements OnInit {

  id:number = 0

  realtorForm = this.fb.group({
    name: ['', Validators.required],
    age:['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router: Router, private realtorService: RealtorService) {
    this.route.params
    .subscribe(param => {
      this.id = param['id']
    })
  }

  ngOnInit(): void {
    this.getOneAgentImmobilier()
  }

  getOneAgentImmobilier(): void{
    this.realtorService.getOneAgentImmobilier(this.id)
    .then(realtor => {
      this.realtorForm.patchValue(realtor)
    })
    .catch(err => console.log(err))
  }

  submit():void{
    this.realtorService.getEditAgentImmobilier(this.realtorForm.value, this.id)
    .then(() => {
      this.router.navigate(['realtors/list-realtor'])
    })
    .catch(err => console.log(err))
  }

}
