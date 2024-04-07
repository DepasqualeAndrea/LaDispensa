import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { SocialboxComponent } from './components/social-combobox/socialbox/socialbox.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContattiComponent,
    ChiSiamoComponent,
    CustomCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialboxComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
