import { TestBed } from '@angular/core/testing';

import { ShareCounterDataService } from './share-counter-data.service';

describe('ShareCounterDataService', () => {
  let service: ShareCounterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCounterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
