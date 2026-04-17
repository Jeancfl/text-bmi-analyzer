import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiCalculatorComponent } from './bmi-calculator.component';

describe('BmiCalculatorComponent', () => {
  let component: BmiCalculatorComponent;
  let fixture: ComponentFixture<BmiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});