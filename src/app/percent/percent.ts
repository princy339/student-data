import { Component, effect, inject } from '@angular/core';
import { ServiceStudent } from '../services/service-student';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-percent',
  imports: [CommonModule,FormsModule, RouterModule],
  standalone: true,  
  templateUrl: './percent.html',
  styleUrls: ['./percent.css']
})
export class Percent {
  student;
  percentage;
private toastr = inject(ToastrService);

  constructor(private studentService: ServiceStudent) {
    this.student = this.studentService.student;
    console.log('Student data:', this.student());
    this.percentage = this.studentService.percentage;
    console.log('Percentage:', this.percentage());

     effect(() => {
    const percent = this.studentService.percentage();
    if (percent > 100) {
      this.toastr.warning('Percentage exceeds 100!', 'Warning');
    }
  });

  }



}
