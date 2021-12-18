import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BienService } from 'src/app/shared/service/bien.service';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  bienForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private bienService: BienService) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.bienService.getAddBien(this.bienForm.value)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }
}
