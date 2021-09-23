import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss'],
})
export class LoginWindowComponent {
  constructor(private auth: AuthService, public router: Router) {}

  public login = '';

  public password = '';

  public onLogin(): void {
    console.log(this.login, this.password);
    this.auth.login(this.login, this.password);
  }

  public onRegistrationPage(): void {
    this.router.navigate(['auth', 'registration']);
  }
}
