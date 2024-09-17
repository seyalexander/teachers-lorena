import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3Lvl3Component } from './actividad-3-lvl-3.component';

describe('Actividad3Lvl3Component', () => {
  let component: Actividad3Lvl3Component;
  let fixture: ComponentFixture<Actividad3Lvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad3Lvl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actividad3Lvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
