import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CirclesComponent } from './circles/circles.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
