import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'] // ✅ FIXED
})
export class BmiCalculatorComponent {

  weightLbs: number | null = null;
  heightFeet: number | null = null;
  heightInches: number | null = null;

  bmi: number | null = null;
  bmiCategory: string = '';
  calculated: boolean = false;
  errorMessage: string = '';

  calculateBMI(): void {
    this.errorMessage = '';

    if (
      this.weightLbs === null ||
      this.heightFeet === null ||
      this.heightInches === null
    ) {
      this.errorMessage = 'Please fill in all fields';
      this.calculated = false;
      return;
    }

    const totalInches = (this.heightFeet * 12) + this.heightInches;

    if (totalInches <= 0 || this.weightLbs <= 0) {
      this.errorMessage = 'Enter valid numbers';
      this.calculated = false;
      return;
    }

    this.bmi = (this.weightLbs * 703) / (totalInches * totalInches);

    if (this.bmi < 18.5) this.bmiCategory = 'Underweight';
    else if (this.bmi < 25) this.bmiCategory = 'Normal';
    else if (this.bmi < 30) this.bmiCategory = 'Overweight';
    else this.bmiCategory = 'Obese';

    this.calculated = true;
  }
}