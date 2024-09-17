import { TestBed } from '@angular/core/testing';

import { Actividad1Service } from './actividad-1.service';

describe('Actividad1Service', () => {
  let service: Actividad1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actividad1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
