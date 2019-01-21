import { TestBed } from '@angular/core/testing';

import { GirlsDataService } from './girls-data.service';

describe('GirlsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GirlsDataService = TestBed.get(GirlsDataService);
    expect(service).toBeTruthy();
  });
});
