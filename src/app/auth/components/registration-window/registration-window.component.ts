import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration-window',
  templateUrl: './registration-window.component.html',
  styleUrls: ['./registration-window.component.scss'],
})
export class RegistrationWindowComponent {
  constructor(private authService: AuthService, public router: Router) {}

  public firstName = '';

  public lastName = '';

  public login = '';

  public password = '';

  public onRegistration(): void {
    this.authService.createAccount(this.firstName, this.lastName, this.login, this.password);
  }

  public goToLoginPage(): void {
    this.router.navigate(['auth', 'login']);
  }
}
