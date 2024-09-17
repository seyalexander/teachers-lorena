import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1Lvl3Component } from './actividad-1-lvl-3.component';

describe('Actividad1Lvl3Component', () => {
  let component: Actividad1Lvl3Component;
  let fixture: ComponentFixture<Actividad1Lvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1Lvl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad1Lvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
