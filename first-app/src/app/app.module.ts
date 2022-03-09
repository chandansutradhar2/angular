import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarasoulComponent } from './carasoul/carasoul.component';
import { CategoryComponent } from './category/category.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, HeaderComponent, FooterComponent, CarasoulComponent, CategoryComponent, MenubarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
