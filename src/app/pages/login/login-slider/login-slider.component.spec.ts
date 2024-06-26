import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSliderComponent } from './login-slider.component';

describe('LoginSliderComponent', () => {
  let component: LoginSliderComponent;
  let fixture: ComponentFixture<LoginSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
