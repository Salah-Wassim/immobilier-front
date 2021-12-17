import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-annonces',
  templateUrl: './list-item-annonces.component.html',
  styleUrls: ['./list-item-annonces.component.css']
})
export class ListItemAnnoncesComponent implements OnInit {

  @Input() annonce:any

  constructor() {}

  ngOnInit(): void {

  }


}