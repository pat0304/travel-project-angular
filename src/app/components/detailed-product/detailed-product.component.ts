import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.css',
})
export class DetailedProductComponent {
  title = 'tourVN';
  travelData: any;
  private url: string = 'http://localhost:3000/products';
  getID: any;
  detailedProduct: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getID = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(`${this.url}?id=${this.getID}`).subscribe((res) => {
      this.detailedProduct = res;
    });
  }
}
