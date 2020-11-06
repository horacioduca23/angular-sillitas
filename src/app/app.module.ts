import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChairListComponent } from './chair-list/chair-list.component';
import { FormsModule } from '@angular/forms';
import { SillitasAboutComponent } from './sillitas-about/sillitas-about.component';
import { SillitasChairsComponent } from './sillitas-chairs/sillitas-chairs.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChairListComponent,
    SillitasAboutComponent,
    SillitasChairsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }