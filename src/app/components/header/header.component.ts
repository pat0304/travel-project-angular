import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../../module/Cart';
import { User } from '../../../module/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchInput: any = new FormGroup({
    searchText: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  user: User = inject(User);
  information: any;
  constructor(private router: Router) {}
  submit() {
    if (this.searchInput.invalid) {
      return false;
    } else {
      return this.searchNow();
    }
  }
  searchNow(): void {
    this.router.navigate(['/search'], {
      queryParams: { searchQuery: this.searchInput.value.searchText },
    });
  }
  cart: Cart = inject(Cart);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.information = this.user.get();
    console.log(this.information);
  }
}
