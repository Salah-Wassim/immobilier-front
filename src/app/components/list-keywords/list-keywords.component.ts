import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/shared/service/keyword.service';

@Component({
  selector: 'app-list-keywords',
  templateUrl: './list-keywords.component.html',
  styleUrls: ['./list-keywords.component.css']
})
export class ListKeywordsComponent implements OnInit {

  keywords: any = []

  constructor(private keywordService: KeywordService) { }

  ngOnInit(): void {
    this.getKeyword()
  }

  getKeyword(): void{
    this.keywordService.getKeyword()
    .then(keywords => {
      this.keywords = keywords
    })
    .catch(err => console.log(err))
  }

  delete(id:number): void{
    this.keywordService.getDeleteKeyword(id)
    .then(() => {this.getKeyword()})
    .catch(err => console.log(err))
  }
}
