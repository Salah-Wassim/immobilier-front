import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from 'src/app/shared/service/keyword.service';

@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html',
  styleUrls: ['./edit-keyword.component.css']
})
export class EditKeywordComponent implements OnInit {

  id:number = 0;

  keywordForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router: Router, private keywordService: KeywordService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
  }

  getOneKeyword(): void{
    this.keywordService.getOneKeyword(this.id)
    .then(keyword => {
      this.keywordForm.patchValue(keyword)
    })
    .catch(err => console.log(err))
  }

  submit(): void{
    this.keywordService.getEditKeyword(this.keywordForm.value, this.id)
    .then(() => {
      this.router.navigate([''])
    })
    .catch()
  }
  
}
