import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {

  constructor(public router: Router) { }

  public goToStorePage(): void {
    this.router.navigate(['user', 'cart']);
  }

}
