import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarasoulComponent } from './carasoul/carasoul.component';
import { CategoryComponent } from './category/category.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { SocialSigninComponent } from './social-signin/social-signin.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    CarasoulComponent,
    CategoryComponent,
    MenubarComponent,
    ButtonComponent,
    SearchComponent,
    SigninComponent,
    SocialSigninComponent,
    CartComponent,
    PaymentComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
