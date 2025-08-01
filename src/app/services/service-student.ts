import { Injectable, signal, computed } from '@angular/core';

export interface Student {
  name: string;
  address: string;
  marks: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceStudent {
  student = signal<Student>({ name: '', address: '', marks: 0 });
  totalMarks = signal<number>(500);

  percentage = computed(() => {
    const s = this.student();
    console.log('Calculating percentage for:', s);
    return s.marks && this.totalMarks() ? (s.marks / this.totalMarks()) * 100 : 0;
  });

 setStudent(data: Student) {
  this.student.set({
    ...data,
    marks: Number(data.marks) // Ensure marks is a number
  });
}
}