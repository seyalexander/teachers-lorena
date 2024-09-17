import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesLvl4Component } from './opciones-lvl-4.component';

describe('OpcionesLvl4Component', () => {
  let component: OpcionesLvl4Component;
  let fixture: ComponentFixture<OpcionesLvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesLvl4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesLvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
