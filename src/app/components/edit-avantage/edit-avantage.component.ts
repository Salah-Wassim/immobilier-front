import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvantageService } from 'src/app/shared/service/avantage.service';

@Component({
  selector: 'app-edit-avantage',
  templateUrl: './edit-avantage.component.html',
  styleUrls: ['./edit-avantage.component.css']
})
export class EditAvantageComponent implements OnInit {

  id:number = 0

  avantageForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private avantageService: AvantageService) {
    this.route.params
    .subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
  }

  getAvantage(): void{
    this.avantageService.getAvantage(this.id)
    .then(annonce => {
      this.avantageForm.patchValue(annonce)
    })
    .catch(err => console.log(err))
  }

  submit(): void{
    this.avantageService.getEditAvantage(this.avantageForm.value, this.id)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }
}
