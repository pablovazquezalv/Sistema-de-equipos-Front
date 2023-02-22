import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-roles-dialog-component',
  templateUrl: './roles-dialog-component.component.html',
  styleUrls: ['./roles-dialog-component.component.css']
})
export class RolesDialogComponentComponent implements OnInit {

  form: FormGroup;

  public apiFailed: boolean = false;

  constructor(private dialogRef: MatDialogRef<RolesDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) private data: { id: number }, private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) 
  {
    this.form = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  onSubmit(user: User)
  {
    this.userService.actualizarRol(user, this.data.id).subscribe(response => {
      this.dialogRef.close();
      //location.reload();
      this.router.navigate(['/']);
    },
    error => {
      this.apiFailed = true;
    });
  }

  getUser()
  {
    this.userService.mostrarUnico(this.data.id).subscribe(user => {this.form.patchValue(user)});
  }

  close() {
    this.dialogRef.close();
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
