import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesLvl3Component } from './opciones-lvl-3.component';

describe('OpcionesLvl3Component', () => {
  let component: OpcionesLvl3Component;
  let fixture: ComponentFixture<OpcionesLvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesLvl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesLvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
