import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1Lvl2Component } from './actividad-1-lvl2.component';

describe('Actividad1Lvl2Component', () => {
  let component: Actividad1Lvl2Component;
  let fixture: ComponentFixture<Actividad1Lvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1Lvl2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad1Lvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
