import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-formulario-cambiar-status',
  templateUrl: './formulario-cambiar-status.component.html',
  styleUrls: ['./formulario-cambiar-status.component.css']
})
export class FormularioCambiarStatusComponent {
  form: FormGroup;
  showError: boolean = false;

  id: number = 0;
  user?: User;

  public apiFailed: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      status: ['', Validators.required]
    });

  }
    ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    
  }

  

  onSubmit(user: User) 
  {
    this.userService.actualizarEstado(user, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['usuarios/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } }); this.router.navigate(['usuarios/ver']);},
      error => {console.log(error); this.showError = true; this.apiFailed = true; });
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
