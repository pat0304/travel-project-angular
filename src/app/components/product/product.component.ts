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
  getRegion: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.getRegion = this.route.snapshot.paramMap.get('region');
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.getRegion != null) {
      this.http.get(`${this.url}?region=${this.getRegion}`).subscribe((res) => {
        this.travelData = res;
        console.log(this.travelData);
      });
    } else {
      this.http.get(this.url).subscribe((res) => {
        this.travelData = res;
      });
    }
  }
}
