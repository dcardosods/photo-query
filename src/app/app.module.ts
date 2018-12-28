import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SearchModule } from './search/search.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    SearchModule,
    FavoritesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
