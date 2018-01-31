 import { UsersService } from '../../services/users.service';
 import { Router } from '@angular/router';
 import { Injectable } from '@angular/core'

@Injectable()
export class SingInPage{

    private usersService: UsersService;
    private signInForm: Number;
    private router: Router;
    private loginError: Number;

    constructor() {

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
}
