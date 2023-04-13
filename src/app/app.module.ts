import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiteListComponent } from './components/site-list/site-list.component';
import { PasswordListComponent } from './components/password-list/password-list.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {CommonModule} from '@angular/common';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule  } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiteListComponent,
    PasswordListComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
