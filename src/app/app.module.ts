import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ApiComponent } from './components/api/api.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ApiComponent,
    PricingComponent,
    ServicesComponent,
    FooterComponent,
    TestimonialsComponent,
    DetailsComponent,
    FourzerofourComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
