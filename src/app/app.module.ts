import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { DividerComponent } from './divider/divider.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PricingComponent } from './pricing/pricing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { NewsletterService } from './newsletter/newsletter.service';
import { ContactService } from './contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServiceComponent,
    DividerComponent,
    AboutComponent,
    TeamComponent,
    NewsletterComponent,
    PricingComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NewsletterService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
