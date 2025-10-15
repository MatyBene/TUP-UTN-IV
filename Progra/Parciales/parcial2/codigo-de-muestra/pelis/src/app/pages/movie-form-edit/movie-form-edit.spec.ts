import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormEdit } from './movie-form-edit';

describe('MovieFormEdit', () => {
  let component: MovieFormEdit;
  let fixture: ComponentFixture<MovieFormEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFormEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
