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
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './gallery/gallery.component';


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
    LoginComponent,
    AboutComponent,
    CartComponent,
    SignupComponent,
    CheckoutComponent,
    AdminComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    ProductsService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
