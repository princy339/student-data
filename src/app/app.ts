import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Marks } from './marks/marks';  
import { Percent } from './percent/percent';

@Component({
  selector: 'app-root',
  imports: [Marks, Percent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-data');
}
