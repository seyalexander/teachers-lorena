import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3Lvl2Component } from './actividad-3-lvl-2.component';

describe('Actividad3Lvl2Component', () => {
  let component: Actividad3Lvl2Component;
  let fixture: ComponentFixture<Actividad3Lvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad3Lvl2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad3Lvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
