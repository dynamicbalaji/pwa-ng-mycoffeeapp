import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
         MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from "./data.service";
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
    MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [ GeolocationService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
