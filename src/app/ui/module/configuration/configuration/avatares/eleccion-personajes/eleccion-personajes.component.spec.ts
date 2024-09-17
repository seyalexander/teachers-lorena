import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionPersonajesComponent } from './eleccion-personajes.component';

describe('EleccionPersonajesComponent', () => {
  let component: EleccionPersonajesComponent;
  let fixture: ComponentFixture<EleccionPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleccionPersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleccionPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
