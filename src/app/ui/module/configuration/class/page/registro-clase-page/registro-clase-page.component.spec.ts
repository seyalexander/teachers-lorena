import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClasePageComponent } from './registro-clase-page.component';

describe('RegistroClasePageComponent', () => {
  let component: RegistroClasePageComponent;
  let fixture: ComponentFixture<RegistroClasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroClasePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroClasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
