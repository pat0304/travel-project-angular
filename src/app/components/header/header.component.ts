import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../../module/Cart';

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
      queryParams: { searchQuery: this.searchInput.value.searchText },
    });
  }
  cart: Cart = inject(Cart);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
