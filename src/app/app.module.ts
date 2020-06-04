import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
