import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-self-service',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './self-service.html',
  styleUrl: './self-service.css'
})
export class SelfService {
  services = [
    { name: 'Student Registration', icon: 'person-add', status: 'active' },
    { name: 'Course Enrollment', icon: 'school', status: 'active' },
    { name: 'Grade Check', icon: 'document-text', status: 'active' },
    { name: 'Fee Payment', icon: 'card', status: 'maintenance' },
    { name: 'Library Access', icon: 'library', status: 'active' }
  ];

  selectedService: any = null;

  selectService(service: any) {
    this.selectedService = service;
  }

  getStatusColor(status: string) {
    return status === 'active' ? 'success' : 'warning';
  }
} 