import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  data: any;
  url: string = 'http://localhost:3000/blogs';
  getBlogID: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe((params) => {
      this.getBlogID = params['id'];

      this.http.get(`${this.url}?id=${this.getBlogID}`).subscribe((res) => {
        this.data = res;
      });
    });
  }
}
