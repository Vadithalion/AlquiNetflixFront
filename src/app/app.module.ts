import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    UserInfoComponent,
    FilmInfoComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
