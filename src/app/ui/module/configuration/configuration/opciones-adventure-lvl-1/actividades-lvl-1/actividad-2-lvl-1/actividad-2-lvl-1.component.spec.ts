import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2Lvl1Component } from './actividad-2-lvl-1.component';

describe('Actividad2Lvl1Component', () => {
  let component: Actividad2Lvl1Component;
  let fixture: ComponentFixture<Actividad2Lvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2Lvl1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2Lvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
