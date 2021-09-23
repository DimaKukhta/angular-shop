import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss'],
})
export class LoginWindowComponent {
  constructor(private auth: AuthService, public router: Router, private userService: UserService) {}

  public login = '';

  public password = '';

  public onLogin(): void {
    this.auth.login(this.login, this.password);
  }

  public onRegistrationPage(): void {
    this.router.navigate(['auth', 'registration']);
  }
}
