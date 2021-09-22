import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from './redux/actions/catigories.actions';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, public userService: UserService) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.userService.getUserInfo();
  }
}
