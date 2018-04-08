import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroService } from './services/hero-service';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
