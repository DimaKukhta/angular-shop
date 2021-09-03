import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountry } from 'src/app/redux/selectors/settings.selectors';
import { SelectCityComponent } from './components/select-city/select-city.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}

  public country$!: Observable<any>;

  ngOnInit(): void {
    this.country$ = this.store.pipe(select(selectCountry));
  }

  public openDialog(): void {
    this.dialog.open(SelectCityComponent);
  }
}
