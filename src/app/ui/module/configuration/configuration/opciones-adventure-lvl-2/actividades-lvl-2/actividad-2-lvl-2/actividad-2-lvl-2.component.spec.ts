import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2Lvl2Component } from './actividad-2-lvl-2.component';

describe('Actividad2Lvl2Component', () => {
  let component: Actividad2Lvl2Component;
  let fixture: ComponentFixture<Actividad2Lvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2Lvl2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2Lvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
