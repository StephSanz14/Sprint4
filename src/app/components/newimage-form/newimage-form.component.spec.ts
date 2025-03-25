import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewimageFormComponent } from './newimage-form.component';

describe('NewimageFormComponent', () => {
  let component: NewimageFormComponent;
  let fixture: ComponentFixture<NewimageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewimageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewimageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
