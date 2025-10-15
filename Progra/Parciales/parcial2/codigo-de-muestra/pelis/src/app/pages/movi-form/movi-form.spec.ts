import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviForm } from './movi-form';

describe('MoviForm', () => {
  let component: MoviForm;
  let fixture: ComponentFixture<MoviForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
