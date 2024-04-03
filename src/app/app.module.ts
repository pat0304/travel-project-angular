import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBannerComponent } from './components/home/home-components/top-banner/top-banner.component';
import { TourHotCarouselComponent } from './components/home/home-components/tour-hot-carousel/tour-hot-carousel.component';
import { TopTourTabsComponent } from './components/home/home-components/top-tour-tabs/top-tour-tabs.component';
import { FormContactComponent } from './components/home/home-components/form-contact/form-contact.component';
import { ProductComponent } from './components/product/product.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CarouselDirective } from './components/home/home-components/tour-hot-carousel/carousel.directive';
import { BlogComponent } from './components/blog/blog.component';
import { HomeBlogComponent } from './components/home/home-components/home-blog/home-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopBannerComponent,
    TourHotCarouselComponent,
    TopTourTabsComponent,
    FormContactComponent,
    BlogComponent,
    ProductComponent,
    DetailedProductComponent,
    BlogDetailComponent,
    CarouselDirective,
    HomeBlogComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
