import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryEsgDashBoardComponent } from './industry-esg-dash-board.component';

describe('IndustryEsgDashBoardComponent', () => {
  let component: IndustryEsgDashBoardComponent;
  let fixture: ComponentFixture<IndustryEsgDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryEsgDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryEsgDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
