import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrl: './bmi-calculator.component.css'
})
export class BmiCalculatorComponent {
  weightLbs: number | null = null;
  heightFeet: number | null = null;
  heightInches: number | null = null;

  bmi: number | null = null;
  bmiCategory: string = '';
  categoryClass: string = '';
  calculated: boolean = false;
  errorMessage: string = '';

  calculateBMI(): void {
    this.errorMessage = '';

    if (
      this.weightLbs === null || this.heightFeet === null || this.heightInches === null ||
      isNaN(Number(this.weightLbs)) || isNaN(Number(this.heightFeet)) || isNaN(Number(this.heightInches))
    ) {
      this.errorMessage = 'Please fill in all three fields.';
      this.calculated = false;
      return;
    }

    const totalInches = (Number(this.heightFeet) * 12) + Number(this.heightInches);

    if (totalInches <= 0 || Number(this.weightLbs) <= 0) {
      this.errorMessage = 'Please enter valid positive values.';
      this.calculated = false;
      return;
    }

    // BMI formula (US imperial): (weight lbs × 703) / (height inches)²
    this.bmi = (Number(this.weightLbs) * 703) / (totalInches * totalInches);

    if (this.bmi < 18.5) {
      this.bmiCategory = 'Underweight';
      this.categoryClass = 'underweight';
    } else if (this.bmi < 25) {
      this.bmiCategory = 'Normal weight';
      this.categoryClass = 'normal';
    } else if (this.bmi < 30) {
      this.bmiCategory = 'Overweight';
      this.categoryClass = 'overweight';
    } else {
      this.bmiCategory = 'Obese';
      this.categoryClass = 'obese';
    }

    this.calculated = true;
  }
}