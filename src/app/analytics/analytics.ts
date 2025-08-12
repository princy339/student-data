import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {
  metrics = [
    { name: 'Total Students', value: 1250, change: '+12%', trend: 'up' },
    { name: 'Active Courses', value: 45, change: '+5%', trend: 'up' },
    { name: 'Revenue', value: '₹2.5M', change: '+18%', trend: 'up' },
    { name: 'Completion Rate', value: '87%', change: '+3%', trend: 'up' }
  ];

  recentActivities = [
    { action: 'New student enrolled', time: '2 minutes ago', type: 'enrollment' },
    { action: 'Payment received', time: '5 minutes ago', type: 'payment' },
    { action: 'Course completed', time: '10 minutes ago', type: 'completion' },
    { action: 'Grade updated', time: '15 minutes ago', type: 'grade' }
  ];

  selectedMetric: any = null;

  selectMetric(metric: any) {
    this.selectedMetric = metric;
  }

  getTrendIcon(trend: string) {
    return trend === 'up' ? 'arrow-up-circle' : 'arrow-down-circle';
  }

  getTrendColor(trend: string) {
    return trend === 'up' ? 'success' : 'danger';
  }

  getActivityIcon(type: string) {
    switch(type) {
      case 'enrollment': return 'person-plus';
      case 'payment': return 'credit-card';
      case 'completion': return 'check-circle';
      case 'grade': return 'star';
      default: return 'info-circle';
    }
  }
} 