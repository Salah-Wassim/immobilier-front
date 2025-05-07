import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {

  admins: any[] = []

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmin()
  }

  getAdmin(): void{
    this.adminService.getAdmin()
    .then(admins => {
      this.admins = admins;
    })
    .catch(err => console.error(err))
  }

  deleteAdmin(id:number): void{
    this.adminService.deleteAdmin(id)
    .then(() => this.getAdmin())
    .catch((err) => console.error(err))
  }
  
}
