import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PhotoCardComponent } from './photo-card/photo-card.component';
import { FavoriteFormComponent } from './favorite-form/favorite-form.component';

@NgModule({
  declarations: [PhotoCardComponent, FavoriteFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, PhotoCardComponent, FavoriteFormComponent],
})
export class SharedModule {}
