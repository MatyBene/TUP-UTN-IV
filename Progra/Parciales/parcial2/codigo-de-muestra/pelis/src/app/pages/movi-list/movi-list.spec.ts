import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviList } from './movi-list';

describe('MoviList', () => {
  let component: MoviList;
  let fixture: ComponentFixture<MoviList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
