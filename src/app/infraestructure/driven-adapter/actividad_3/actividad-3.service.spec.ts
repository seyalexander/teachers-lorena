import { TestBed } from '@angular/core/testing';

import { Actividad3Service } from './actividad-3.service';

describe('Actividad3Service', () => {
  let service: Actividad3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actividad3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
