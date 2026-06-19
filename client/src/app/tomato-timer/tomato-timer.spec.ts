import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoTimer } from './tomato-timer';

describe('TomatoTimer', () => {
  let component: TomatoTimer;
  let fixture: ComponentFixture<TomatoTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomatoTimer],
    }).compileComponents();

    fixture = TestBed.createComponent(TomatoTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
