import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { formatNumber } from '../../../module/module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  travelData: any;
  url: string = 'http://localhost:3000/products';
  getRegion: any;
  sortSelected: string = 'no';
  formatNumber: any = new formatNumber();
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  onSort(): void {
    if (this.sortSelected == 'increase') {
      this.travelData.sort((a: any, b: any) => a.price - b.price);
    } else if (this.sortSelected == 'decrease') {
      this.travelData.sort((a: any, b: any) => b.price - a.price);
    } else if (this.sortSelected == 'AZ') {
      this.travelData.sort(function (a: any, b: any) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    } else if (this.sortSelected == 'ZA') {
      this.travelData
        .sort(function (a: any, b: any) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
        .reverse();
    }
  }
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
          console.log();
        });
      }
    });
  }
}
