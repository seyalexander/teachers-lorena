import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesLvl1Component } from './opciones-lvl-1.component';

describe('OpcionesLvl1Component', () => {
  let component: OpcionesLvl1Component;
  let fixture: ComponentFixture<OpcionesLvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesLvl1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesLvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
