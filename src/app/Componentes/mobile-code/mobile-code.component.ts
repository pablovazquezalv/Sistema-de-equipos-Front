import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Mobile } from 'src/app/Interfaces/mobile.interface';
import { MobileCodeService } from 'src/app/Services/mobile-code.service';
@Component({
  selector: 'app-mobile-code',
  templateUrl: './mobile-code.component.html',
  styleUrls: ['./mobile-code.component.css']
})
export class MobileCodeComponent {

  showError: boolean = false;
  form: FormGroup;
  usuario?:Mobile;

  public apiFailed: boolean = false;
  
  constructor(private mobileService: MobileCodeService,private fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      code:  ['', Validators.required],
    });   
  }
 
  ngOnInit() { }

  onSubmit(values: Mobile, url = localStorage.getItem('url'))
  {
    if(typeof url === 'string')
    {
      this.mobileService.addMobile(values, url).subscribe(response => {
        console.log(response);
        localStorage.removeItem('url');
        this.router.navigate(['login'], { queryParams: {showMessage: true, message: 'Persona modificada con exito.'}});
      },
      error => {
        console.log(error); 
        this.showError = true; 
        this.apiFailed = true;
      });
    }

    else
    {
      this.apiFailed = true;
    }
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
