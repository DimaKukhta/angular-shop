import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { selectAuthToken } from 'src/app/redux/selectors/auth.selectors';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

  constructor(public router: Router, private store: Store, private authService: AuthService) { }

  public token$ = this.store.select(selectAuthToken);

  public goAuthPage = () => {
    this.router.navigate(['auth', 'login']);
  };

  public goToCart = () => {
    this.router.navigate(['user', 'cart']);
  };

  public goToFavorite = () => {
    this.router.navigate(['user', 'favorite']);
  };

  public onLogOut(): void {
    this.authService.logout();
  }
}
