import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { WeatherComponent } from './weather/weather.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MaterialModule } from './material.module';
import { ChatComponent } from './chat/chat.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { PorukaComponent } from './poruka/poruka.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MovieComponent,
    WeatherComponent,
    MoviespageComponent,
    AdminPageComponent,
    ChatComponent,
    ChatwindowComponent,
    PorukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
