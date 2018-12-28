import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import * as fromFavorites from './favorites.reducer';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('favorites', fromFavorites.reducer),

    FavoritesRoutingModule,
  ],
})
export class FavoritesModule {}
