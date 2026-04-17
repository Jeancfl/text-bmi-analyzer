import { Component } from '@angular/core';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextAnalyzerComponent, BmiCalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Text & BMI Analyzer';
}