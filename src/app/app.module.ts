import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchModule } from './search/search.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchModule, FavoritesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
