import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  data: any;
  dataTop: any;
  url: string = 'http://localhost:3000/blogs';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(`${this.url}?_start=3&_limit=10`).subscribe((res) => {
      this.data = res;
    });
    this.http.get(`${this.url}?_start=0&_limit=3`).subscribe((res) => {
      this.dataTop = res;
    });
  }
}
