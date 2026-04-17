import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.css'
})
export class TextAnalyzerComponent {
  inputText: string = '';
  vowelCount: number | null = null;
  consonantCount: number | null = null;
  analyzed: boolean = false;

  analyzeText(): void {
    if (!this.inputText.trim()) {
      this.analyzed = false;
      this.vowelCount = null;
      this.consonantCount = null;
      return;
    }

    const vowels = 'aeiouAEIOU';
    const letters = this.inputText.replace(/[^a-zA-Z]/g, '');

    this.vowelCount = 0;
    this.consonantCount = 0;

    for (const char of letters) {
      if (vowels.includes(char)) {
        this.vowelCount++;
      } else {
        this.consonantCount++;
      }
    }

    this.analyzed = true;
  }
}