import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { BannerMacComponent } from './banner-mac/banner-mac.component';
import { ServicesComponent } from './services/services.component';
import { BannerCTAComponent } from './banner-cta/banner-cta.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FeaturesComponent,
    BannerMacComponent,
    ServicesComponent,
    BannerCTAComponent,
    PriceTableComponent,
    AboutUsComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
