import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedsComponent } from './bookeds.component';

describe('BookedsComponent', () => {
  let component: BookedsComponent;
  let fixture: ComponentFixture<BookedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
