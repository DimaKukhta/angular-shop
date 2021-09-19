import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: any;

  @Input() incrementCount!: any;

  @Input() dicrementCount!: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.cartItem);
  }

  public onDelete(id: string): void {
    this.userService.deleteFromCart(id);
  }

}
