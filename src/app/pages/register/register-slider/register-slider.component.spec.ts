import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSliderComponent } from './register-slider.component';

describe('RegisterSliderComponent', () => {
  let component: RegisterSliderComponent;
  let fixture: ComponentFixture<RegisterSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
