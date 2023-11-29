import { TestBed } from '@angular/core/testing';

import { FilterRecipesService } from './filter-recipes.service';

describe('FilterRecipesService', () => {
  let service: FilterRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
