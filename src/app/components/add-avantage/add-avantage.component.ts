import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvantageService } from 'src/app/shared/service/avantage.service';

@Component({
  selector: 'app-add-avantage',
  templateUrl: './add-avantage.component.html',
  styleUrls: ['./add-avantage.component.css']
})
export class AddAvantageComponent implements OnInit {

  avantageForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private router:Router, private avantageService: AvantageService) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.avantageService.getAddAvantage(this.avantageForm.value)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }
  
}
