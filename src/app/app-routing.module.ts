import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
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
    path: 'product/:id',
    component: DetailedProductComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
