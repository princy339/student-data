import { Component } from '@angular/core';
import { ServiceStudent } from '../services/service-student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marks',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './marks.html',
  styleUrl: './marks.css'
})
export class Marks {
  student;

  constructor(private studentService: ServiceStudent) {
    this.student = this.studentService.student();
  }

  onInputChange() {
    this.studentService.setStudent(this.student);
  }
}