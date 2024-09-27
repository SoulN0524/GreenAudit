import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainableGPTComponent } from './sustainable-gpt.component';

describe('SustainableGPTComponent', () => {
  let component: SustainableGPTComponent;
  let fixture: ComponentFixture<SustainableGPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainableGPTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainableGPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
