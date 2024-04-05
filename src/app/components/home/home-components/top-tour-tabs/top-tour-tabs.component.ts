import { Component } from '@angular/core';

@Component({
  selector: 'app-top-tour-tabs',
  templateUrl: './top-tour-tabs.component.html',
  styleUrl: './top-tour-tabs.component.css',
})
export class TopTourTabsComponent {
  url = 'http://localhost:3000/products';
  dataN: any;
  dataT: any;
  dataB: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    fetch(this.url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.dataB = data
          .filter((d: any) => d.region == 'bac')
          .sort((a: any, b: any) => b.price - a.price)
          .slice(0, 3);
        this.dataT = data
          .filter((d: any) => d.region == 'trung')
          .sort((a: any, b: any) => b.price - a.price)
          .slice(0, 3);
        this.dataN = data
          .filter((d: any) => d.region == 'nam')
          .sort((a: any, b: any) => b.price - a.price)
          .slice(0, 3);
      });
  }
}
