import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  errorMessage: string | null = null;

  adminForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  submit():void{
    this.adminService.addAdmin(this.adminForm.value)
    .then(() => {
      this.router.navigate(['list-admins'])
    })
    .catch(err => {
      console.error(err)
      if (err.error?.message) {
        this.errorMessage = err.error.message;
      } else {
        this.errorMessage = "Erreur inattendue. Veuillez réessayer.";
      }
    })
  }
}
