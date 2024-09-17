import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasePageComponent } from './clase-page.component';

describe('ClasePageComponent', () => {
  let component: ClasePageComponent;
  let fixture: ComponentFixture<ClasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
