import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FavoritesList } from '../favorites-list';

@Component({
  selector: 'app-favorite-form',
  templateUrl: './favorite-form.component.html',
  styleUrls: ['./favorite-form.component.scss'],
})
export class FavoriteFormComponent implements OnInit {
  @Input() favorite: FavoritesList;
  @Input() submitText = 'Submit';
  @Output() submitted = new EventEmitter<FavoritesList>();

  constructor() {}

  ngOnInit() {}

  onSubmit(favorite: FavoritesList) {
    this.submitted.emit(favorite);
  }
}
