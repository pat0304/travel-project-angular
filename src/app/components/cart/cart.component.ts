import { Component, inject } from '@angular/core';
import { Cart } from '../../../module/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  Cart: Cart = inject(Cart);
  cartData: any;
  cartTotal: any;

  setQuantity(id: number, quantity: any): void {
    this.Cart.setQuantity(id, parseInt(quantity));
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cartData = this.Cart.get();
  }
}
