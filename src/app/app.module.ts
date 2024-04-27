import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ImportantParts/navigation/navigation.component';
import { FooterComponent } from './ImportantParts/footer/footer.component';
import { NavtopComponent } from './ImportantParts/navtop/navtop.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './pages/error/error.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HotelsComponent } from './pages/home/hotels/hotels.component';
import { LoginSliderComponent } from './pages/login/login-slider/login-slider.component';
import { RegisterSliderComponent } from './pages/register/register-slider/register-slider.component';
import { VideoComponent } from './pages/home/video/video.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DetailsComponent } from './pages/rooms/details/details.component';
import { BookedsComponent } from './pages/bookeds/bookeds.component';
import { AnotherDetailsComponent } from './pages/rooms/details/another-details/another-details.component';
import { AboutComponent } from './pages/home/about/about.component';
import { EndofhomeComponent } from './pages/home/endofhome/endofhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    NavtopComponent,
    HomeComponent,
    ErrorComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    HotelsComponent,
    LoginSliderComponent,
    RegisterSliderComponent,
    VideoComponent,
     RoomsComponent,
    DetailsComponent,
    BookedsComponent,
    AnotherDetailsComponent,
    AboutComponent,
    EndofhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
