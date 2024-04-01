import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tour-hot-carousel',
  templateUrl: './tour-hot-carousel.component.html',
  styleUrl: './tour-hot-carousel.component.css',
})
export class TourHotCarouselComponent {
  getData: any;
  data: any;
  dataS: any;
  private url: string = 'http://localhost:3000/products?_start=0&_limit=6';
  constructor(private http: HttpClient) {
    this.getData = this.http.get(this.url).subscribe((res: any) => {
      this.data = res;
      this.dataS = this.data.slice(1);
      console.log(this.data);
      console.log(this.dataS);
    });
  }
}
