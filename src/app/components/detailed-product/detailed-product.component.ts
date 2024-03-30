import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.css',
})
export class DetailedProductComponent {
  title = 'tourVN';
  travelData: any;
  url: string = '/assets/db/products.json';
  getID: any;
  detailedProduct: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(this.url).subscribe((res) => {
      this.travelData = res;
      this.getID = this.route.snapshot.paramMap.get('id');
      console.log(this.travelData);

      this.detailedProduct = this.travelData.products.find(
        (product: any) => String(product.id) == this.getID
      );
      console.log('hi', this.detailedProduct);
    });
  }
}
