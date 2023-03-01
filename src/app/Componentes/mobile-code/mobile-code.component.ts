import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
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

  id:number = 0;

  public apiFailed: boolean = false;
  
  constructor(private mobileService: MobileCodeService,private fb: FormBuilder,private router:Router, private route: ActivatedRoute)
  {
    this.form = this.fb.group({
      code:  ['', Validators.required],
    });   
  }
 
  ngOnInit() {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
  }

  reenviarCodigo()
  {
    this.mobileService.reenviarCodigo(this.id).subscribe((response:any) => {
      console.log(response);
      localStorage.setItem('url', response.url);
      alert('Codigo reenviado con exito');
    });
  }

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
