import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1Lvl4Component } from './actividad-1-lvl-4.component';

describe('Actividad1Lvl4Component', () => {
  let component: Actividad1Lvl4Component;
  let fixture: ComponentFixture<Actividad1Lvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1Lvl4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad1Lvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
