import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorite-form',
  templateUrl: './favorite-form.component.html',
  styleUrls: ['./favorite-form.component.scss'],
})
export class FavoriteFormComponent implements OnInit {
  @Input() favorite = new Favorite(null, null);
  @Input() submitText = 'Submit';
  @Output() submitted = new EventEmitter<Favorite>();

  constructor() {}

  ngOnInit() {}

  onSubmit(favorite: Favorite) {
    this.submitted.emit(favorite);
    this.favorite = new Favorite(null, null);
  }
}
