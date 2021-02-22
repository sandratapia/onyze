import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TravelCardModule } from './components/travel-card/travel-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TravelCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
