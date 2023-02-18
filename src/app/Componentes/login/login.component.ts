import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form: FormGroup;
estado?:User;

constructor(private fb: FormBuilder,private userService: UserService,private router:Router)
{
  this.form = this.fb.group({
    email:  ['',Validators.required],
    password:  ['',Validators.required],
  })
}

onSubmit(values: User)
{
  this.userService.login(values)
   this.router.navigate(['estados/ver']); 

}
  backToSignUp()
{
  this.router.navigate(['sign-up'])
}

}
