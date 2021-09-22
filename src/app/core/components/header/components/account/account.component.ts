import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

  constructor(public router: Router) { }

  public goAuthPage = () => {
    this.router.navigate(['auth', 'login']);
  };

  public goToCart = () => {
    this.router.navigate(['user', 'cart']);
  };

  public goToFavorite = () => {
    this.router.navigate(['user', 'favorite']);
  };
}
