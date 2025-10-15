import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPage } from './form-edit-page';

describe('FormEditPage', () => {
  let component: FormEditPage;
  let fixture: ComponentFixture<FormEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
