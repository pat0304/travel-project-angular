import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart: any = [];
  total: number = 0;
  constructor() {}
  addCart(product: any, quantity: number) {
    let index = this.cart.findIndex((item: any) => item.id === product.id);

    if (index == -1) {
      this.cart.push({ ...product, quantity });
    } else {
      this.cart[index].quantity += quantity;
    }
    this.getTotal();
  }
  get() {
    return this.cart;
  }
  setQuantity(id: number, quantity: number) {
    let index = this.cart.findIndex((item: any) => item.id === id);
    this.cart[index].quantity = quantity;
    this.getTotal();
  }
  getTotal() {
    let total = 0;
    this.cart.forEach((item: any) => {
      total += item.quantity * item.price;
    });
    this.total = total;
  }
}
