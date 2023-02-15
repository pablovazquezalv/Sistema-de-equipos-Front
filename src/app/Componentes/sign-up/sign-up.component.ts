import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router:Router){}
 
  ngOnInit()
  {
  }
  backToLogin()
  {
    this.router.navigate(['login'])
  }

  register()
  {
    this.router.navigate(['mobile-code'])
  }

}
