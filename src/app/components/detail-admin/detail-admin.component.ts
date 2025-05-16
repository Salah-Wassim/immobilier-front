import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent implements OnInit {

  id:number = 0
  admin:any = []

  constructor(private route: ActivatedRoute, private adminService: AdminService) {
    this.route.params
    .subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOneAdmin()
  }

  getOneAdmin() :void{
    this.adminService.getOneAdmin(this.id)
    .then(admin => {
      this.admin = admin
    })
    .catch(err => {
      console.error(err)
    })
  }
}
