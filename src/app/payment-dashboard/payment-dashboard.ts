import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-dashboard',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './payment-dashboard.html',
  styleUrl: './payment-dashboard.css'
})
export class PaymentDashboard {
  paymentMethods = [
    { id: 'netbanking', name: 'Net Banking', icon: 'bank', secure: true }
  ];

  selectedMethod = 'credit';
  amount = 5000;
  cardNumber = '';
  cardHolder = '';
  expiryDate = '';
  cvv = '';

  processPayment() {
    // Simulate payment processing
    console.log('Processing payment...');
    alert('Payment processed successfully!');
  }

  getTotalAmount() {
    return this.amount + (this.amount * 0.18); // 18% GST
  }
} 