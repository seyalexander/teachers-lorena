import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2Lvl4Component } from './actividad-2-lvl-4.component';

describe('Actividad2Lvl4Component', () => {
  let component: Actividad2Lvl4Component;
  let fixture: ComponentFixture<Actividad2Lvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2Lvl4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad2Lvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
