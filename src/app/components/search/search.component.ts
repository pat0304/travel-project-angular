import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatNumber } from '../../../module/module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  travelData: any;
  url: string = 'http://localhost:3000/products';
  resultFor: string = '';
  count: boolean = false;
  numberFormat = new formatNumber().moneyFormat;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.queryParams.subscribe((params) => {
      this.resultFor = params['searchQuery'];
      this.http.get(this.url).subscribe((response) => {
        const data: any = response;
        this.travelData = data.filter((da: any) =>
          da.name.toLowerCase().includes(this.resultFor.toLowerCase())
        );
        if (this.travelData.length <= 0) {
          this.count = true;
        } else {
          this.count = false;
        }
      });
    });
  }
}
