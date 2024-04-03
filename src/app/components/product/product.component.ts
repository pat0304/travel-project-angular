import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  travelData: any;
  url: string = 'http://localhost:3000/products';
  getRegion: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe((region) => {
      this.getRegion = region['region'];
      if (this.getRegion != null) {
        this.http
          .get(`${this.url}?region=${this.getRegion}`)
          .subscribe((res) => {
            this.travelData = res;
          });
      } else {
        this.http.get(this.url).subscribe((res) => {
          this.travelData = res;
        });
      }
    });
  }
}
