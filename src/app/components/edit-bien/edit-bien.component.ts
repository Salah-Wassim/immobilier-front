import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BienService } from 'src/app/shared/service/bien.service';

@Component({
  selector: 'app-edit-bien',
  templateUrl: './edit-bien.component.html',
  styleUrls: ['./edit-bien.component.css']
})
export class EditBienComponent implements OnInit {
  
  id: number = 0

  bienForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router: Router, private bienService: BienService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getBien()
  }

  getBien(): void{
    this.bienService.getBien(this.id)
    .then(bien => {
      this.bienForm.patchValue(bien)
    })
    .catch(err => console.log(err))
  }

  submit(): void{
    this.bienService.getEditBien(this.bienForm.value, this.id)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }

}
