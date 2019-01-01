import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import * as fromFavorites from './favorites.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesEffects } from './favorites.effects';
import { FavoriteFormComponent } from './favorite-form/favorite-form.component';

@NgModule({
  declarations: [FavoritesComponent, FavoriteFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('favorites', fromFavorites.reducer),

    FavoritesRoutingModule,

    EffectsModule.forFeature([FavoritesEffects]),
  ],
})
export class FavoritesModule {}
