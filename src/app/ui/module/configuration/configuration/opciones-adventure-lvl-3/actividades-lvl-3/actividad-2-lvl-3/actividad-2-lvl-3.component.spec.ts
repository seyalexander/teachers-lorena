import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2Lvl3Component } from './actividad-2-lvl-3.component';

describe('Actividad2Lvl3Component', () => {
  let component: Actividad2Lvl3Component;
  let fixture: ComponentFixture<Actividad2Lvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2Lvl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2Lvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
