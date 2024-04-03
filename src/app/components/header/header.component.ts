import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchInput: any = new FormGroup({
    searchText: new FormControl(''),
  });
  constructor(private router: Router) {}
  searchNow(): void {
    this.router.navigate(['/search'], {
      queryParams: { search: this.searchInput.value.searchText },
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
