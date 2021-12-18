import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeywordService } from 'src/app/shared/service/keyword.service';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.css']
})
export class AddKeywordComponent implements OnInit {

  keywordForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private keywordService: KeywordService) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.keywordService.getAddKeyword(this.keywordForm.value)
    .then(() => {
      this.router.navigate([''])
    })
    .catch(err => console.log(err))
  }

}
