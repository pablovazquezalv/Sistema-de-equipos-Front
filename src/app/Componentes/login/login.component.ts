import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  estado?:User;

  
  id: number = 0;

  showError: boolean = false;
  public apiFailed: boolean = false;

  constructor(private fb: FormBuilder,private userService: UserService,private router:Router,private route: ActivatedRoute)
  {
    this.form = this.fb.group({
      email:  ['',Validators.required],
      password:  ['',Validators.required],
    });  
  }
  
  

  onSubmit(values: User)
  {  
    this.userService.login(values).subscribe(response =>
    {
      localStorage.setItem('token',response.token);
      console.log(response);
      this.id = response.user.id;
      console.log(this.id);
      this.getEstado();
      this.router.navigate(['propietario/ver']);
    },
    error => {console.log(error); this.showError = true; this.apiFailed = true;});
  }

  getEstado()
   {
    this.userService.mostrarUnico(this.id).subscribe(response => {
      console.log(response);
    });
  }

  backToSignUp()
  {
    this.router.navigate(['sign-up'])
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
