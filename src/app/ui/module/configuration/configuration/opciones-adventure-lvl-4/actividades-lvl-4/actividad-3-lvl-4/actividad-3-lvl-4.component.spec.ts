import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3Lvl4Component } from './actividad-3-lvl-4.component';

describe('Actividad3Lvl4Component', () => {
  let component: Actividad3Lvl4Component;
  let fixture: ComponentFixture<Actividad3Lvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad3Lvl4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad3Lvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
