import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../../../module/Cart';
@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.css',
})
export class DetailedProductComponent {
  title = 'tourVN';
  travelData: any = null;
  url: string = 'http://localhost:3000/products';
  getID: any;
  detailedProduct: any = null;
  cart: Cart = inject(Cart);
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  moneyFormat = function (amount: number) {
    let value = `${amount}`;
    let tru = '';
    if (value.startsWith('-')) {
      value = value.replace('-', '');
      tru = '-';
    }
    if (value.length > 3) {
      let arr = value.split('');
      let count = value.length % 3 == 0 ? 3 : value.length % 3 == 1 ? 2 : 1;
      for (let i = 0; i < arr.length - 1; i++) {
        if (count == 3) {
          arr.splice(i, 0, '.');
          count = 1;
          i++;
        } else {
          count += 1;
        }
      }
      return `${tru}${arr.join('').trim()}`;
    } else {
      return `${tru}${value}`;
    }
  };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe((id) => {
      this.getID = id['id'];
      this.http.get(`${this.url}?id=${this.getID}`).subscribe((data: any) => {
        this.detailedProduct = data;
        console.log(data);
      });
      // fetch(`${this.url}?id=${this.getID}`)
      //   .then((res: any) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     this.detailedProduct = data;
      //   });
    });
  }
  addCart(quantity: any) {
    if (this.detailedProduct[0]) {
      this.cart.addCart(this.detailedProduct[0], parseInt(quantity));
      console.log(this.cart.get());
    }
  }
}
