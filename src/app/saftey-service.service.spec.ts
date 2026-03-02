import { TestBed } from '@angular/core/testing';

import { SafteyServiceService } from './saftey-service.service';

describe('SafteyServiceService', () => {
  let service: SafteyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafteyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
