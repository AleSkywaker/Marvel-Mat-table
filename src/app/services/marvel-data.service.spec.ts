import { TestBed } from '@angular/core/testing';

import { MarvelDataService } from './marvel-data.service';

describe('MarvelDataService', () => {
  let service: MarvelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
