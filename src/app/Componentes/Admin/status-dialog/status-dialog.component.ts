import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  form: FormGroup;

  public apiFailed: boolean = false;

  constructor(private dialogRef: MatDialogRef<StatusDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: { id: number }, private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) 
  {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  onSubmit(user: User)
  {
    this.userService.actualizarEstado(user, this.data.id).subscribe(response => {
      this.dialogRef.close();
      location.reload();
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
