import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'travels',
    component: ProductComponent,
  },
  {
    path: 'travels/:region',
    component: ProductComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'travel/:id',
    component: DetailedProductComponent,
  },

  {
    path: 'blog/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
