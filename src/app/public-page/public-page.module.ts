import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicPageRoutingModule } from './public-page-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PublicPageComponent } from './public-page.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, PublicPageComponent],
  imports: [
    CommonModule,
    PublicPageRoutingModule,
    MaterialModule
  ]
})
export class PublicPageModule { }
