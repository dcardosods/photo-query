import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PhotoCardComponent } from './photo-card/photo-card.component';

@NgModule({
  declarations: [PhotoCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, PhotoCardComponent],
})
export class SharedModule {}
