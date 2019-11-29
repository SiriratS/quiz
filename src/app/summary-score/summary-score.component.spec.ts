import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryScoreComponent } from './summary-score.component';

describe('SummaryScoreComponent', () => {
  let component: SummaryScoreComponent;
  let fixture: ComponentFixture<SummaryScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
