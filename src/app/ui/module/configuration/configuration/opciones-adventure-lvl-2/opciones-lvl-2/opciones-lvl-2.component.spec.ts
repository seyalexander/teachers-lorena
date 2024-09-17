import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesLvl2Component } from './opciones-lvl-2.component';

describe('OpcionesLvl2Component', () => {
  let component: OpcionesLvl2Component;
  let fixture: ComponentFixture<OpcionesLvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesLvl2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesLvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
