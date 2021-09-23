import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/redux/selectors/user.selector';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

  constructor(public router: Router, private store: Store) { }

  public user$ = this.store.select(selectCurrentUser);

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
