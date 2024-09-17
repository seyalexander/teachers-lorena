import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3Lvl1Component } from './actividad-3-lvl-1.component';

describe('Actividad3Lvl1Component', () => {
  let component: Actividad3Lvl1Component;
  let fixture: ComponentFixture<Actividad3Lvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad3Lvl1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad3Lvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
