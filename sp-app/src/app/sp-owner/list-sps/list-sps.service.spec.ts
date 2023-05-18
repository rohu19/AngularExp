import { TestBed } from '@angular/core/testing';

import { ListSpsService } from './list-sps.service';

describe('ListSpsService', () => {
  let service: ListSpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
