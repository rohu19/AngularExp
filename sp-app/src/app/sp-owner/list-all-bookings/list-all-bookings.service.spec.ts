import { TestBed } from '@angular/core/testing';

import { ListAllBookingsService } from './list-all-bookings.service';

describe('ListAllBookingsService', () => {
  let service: ListAllBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAllBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
