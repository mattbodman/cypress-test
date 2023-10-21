import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ItemListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
