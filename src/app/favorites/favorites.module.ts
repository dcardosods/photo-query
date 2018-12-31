import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import * as fromFavorites from './favorites.reducer';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('favorites', fromFavorites.reducer),

    FavoritesRoutingModule,
  ],
})
export class FavoritesModule {}
