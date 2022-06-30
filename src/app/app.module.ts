import { MaterialModule } from './modules/material-ui/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './../app/core/components/home-component/home-component.component';
import { BlogComponent } from './core/components/blog-component/blog/blog.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ContactComponent } from './core/components/contact-component/contact.component';
import { CvComponent } from './core/components/cv-component/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    HeaderComponent,
    ContactComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
