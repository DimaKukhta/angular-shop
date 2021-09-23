import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

  @Input() cartItem!: any;

  constructor(private userService: UserService) { }

  public onDelete(id: string): void {
    this.userService.deleteFromCart(id);
  }

}
