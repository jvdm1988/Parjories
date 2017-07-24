import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { IntroComponent } from './home-page/intro/intro.component';
import { DescriptionComponent } from './home-page/description/description.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { TestimonialsComponent } from './home-page/testimonials/testimonials.component';
import { MenuComponent } from './home-page/menu/menu.component';
import { ProductsService } from './services/products.service';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    DescriptionComponent,
    ContactComponent,
    TestimonialsComponent,
    MenuComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
