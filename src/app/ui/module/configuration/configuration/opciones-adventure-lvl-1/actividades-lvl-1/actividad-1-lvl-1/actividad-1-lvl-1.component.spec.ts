import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1Lvl1Component } from './actividad-1-lvl-1.component';

describe('Actividad1Lvl1Component', () => {
  let component: Actividad1Lvl1Component;
  let fixture: ComponentFixture<Actividad1Lvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1Lvl1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad1Lvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
