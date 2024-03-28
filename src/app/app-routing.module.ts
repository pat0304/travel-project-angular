import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { CartComponent } from './cart/cart.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'product/detail',
    component: DetailedProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'blog/detail',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
