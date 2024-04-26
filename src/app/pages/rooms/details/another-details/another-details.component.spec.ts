import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDetailsComponent } from './another-details.component';

describe('AnotherDetailsComponent', () => {
  let component: AnotherDetailsComponent;
  let fixture: ComponentFixture<AnotherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnotherDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
