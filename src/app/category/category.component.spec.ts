import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: categoryComponent;
  let fixture: ComponentFixture<categoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ categoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(categoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
