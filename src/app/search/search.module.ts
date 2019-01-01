import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { SharedModule } from '../shared/shared.module';
import { SearchEffects } from './search.effects';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import * as fromSearch from './search.reducer';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('search', fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects]),
    NgxSmartModalModule.forChild(),

    SearchRoutingModule,
  ],
})
export class SearchModule {}
