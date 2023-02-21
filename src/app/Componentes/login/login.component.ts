import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';

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

  constructor(private fb: FormBuilder,private userService: UserService,private sharedService: SharedServiceService,private router:Router,private route: ActivatedRoute)
  {
    this.form = this.fb.group({
      email:  ['', [Validators.required, Validators.email]],
      password:  ['',Validators.required],
    });  
    
  }
  
  onSubmit(values: User)
  {  
    this.userService.login(values).subscribe((response:any) =>
    {
      localStorage.setItem('id',response.user.id);
      localStorage.setItem('name',response.user.name);
      localStorage.setItem('role',response.user.role);
      localStorage.setItem('token',response.token);
      this.userService.mostrarUnico(response.user.id).subscribe(user =>
      { console.log(user);
       
      });
      this.sharedService.setId(response.user.role);  
      this.router.navigate(['/']);
    },
    error => {
      console.log(error); 
      this.showError = true; 
      this.apiFailed = true;
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
