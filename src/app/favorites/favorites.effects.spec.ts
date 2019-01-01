import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FavoritesEffects } from './favorites.effects';

describe('FavoritesEffects', () => {
  const actions$: Observable<any>;
  let effects: FavoritesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.get(FavoritesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
