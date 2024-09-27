import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateEsgDashBoardComponent } from './corporate-esg-dash-board.component';

describe('CorporateEsgDashBoardComponent', () => {
  let component: CorporateEsgDashBoardComponent;
  let fixture: ComponentFixture<CorporateEsgDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateEsgDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateEsgDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
