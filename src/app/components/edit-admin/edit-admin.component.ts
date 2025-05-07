import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  id:number = 0

  adminForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private adminService: AdminService) {
    this.route.params
    .subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOneAdmin()
  }

  getOneAdmin():void{
    this.adminService.getOneAdmin(this.id)
    .then(admin => {
      this.adminForm.patchValue(admin)
    })
    .catch(err => console.error(err))
  }

  submit():void{
    this.adminService.editAdmin(this.adminForm.value, this.id)
    .then(() => {
      this.router.navigate(['list-admins'])
    })
    .catch(err => console.error(err))
  }

}
