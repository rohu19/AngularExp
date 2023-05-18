import { TestBed } from '@angular/core/testing';

import { AddSpService } from './add-sp.service';

describe('AddSpService', () => {
  let service: AddSpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
