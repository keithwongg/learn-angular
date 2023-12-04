import { TestBed } from '@angular/core/testing';

import { BusTimingsService } from './bus-timings.service';

describe('BusTimingsService', () => {
  let service: BusTimingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusTimingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
