import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';


 @Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html'
})

export class SignInPageComponent implements OnInit {
    
    private signInForm: FormGroup;
    private loginError: String;

    constructor(public appComponent: AppComponent, 
      public usersService: UsersService,
      public router: Router
      ) {

    }

    ngOnInit(): void {
        this.signInForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
      });
    }
    
    doLogin() {
        this.usersService.login(
          this.signInForm.get('username').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['tasks']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
          })
      }

    isLoggedIn(){
      return this.appComponent.isLoggedIn();
    }
}
