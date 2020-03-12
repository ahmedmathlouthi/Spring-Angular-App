import { TestBed } from '@angular/core/testing';

import { CountSignesService } from './count-signes.service';

describe('CountSignesService', () => {
  let service: CountSignesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSignesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
