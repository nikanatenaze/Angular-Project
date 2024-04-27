import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofhomeComponent } from './endofhome.component';

describe('EndofhomeComponent', () => {
  let component: EndofhomeComponent;
  let fixture: ComponentFixture<EndofhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndofhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndofhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
