import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-chart-demo',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './chart-demo.html',
  styleUrl: './chart-demo.css'
})
export class ChartDemo implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  isBrowser = false;

  // Pie Chart with Smart Labels
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const data = context.dataset.data as number[];
            const total = data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} students (${percentage}%)`;
          }
        }
      },
      datalabels: {
        display: true,
        color: '#333',
        font: {
          weight: 'bold',
          size: 12
        },
        formatter: function(value, context) {
          const data = context.dataset.data as (number | null)[];
          const total = data.reduce((a, b) => (a || 0) + (b || 0), 0) || 0;
          const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
          return `${value}\n(${percentage}%)`;
        },
        anchor: 'center',
        align: 'center',
        offset: 0
      }
    }
  };

  public pieChartData: ChartData<'pie'> = {
    labels: ['Excellent (90-100)', 'Good (80-89)', 'Average (70-79)', 'Below Average (60-69)', 'Needs Improvement (<60)'],
    datasets: [
      {
        data: [25, 35, 30, 15, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 3
      }
    ]
  };

  public pieChartType: ChartType = 'pie';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Initialize any additional chart configurations
  }

  // Method to update chart data dynamically
  updateChartData(newData: number[]) {
    if (this.chart && this.chart.chart) {
      const chart = this.chart.chart;
      chart.data.datasets[0].data = newData;
      chart.update();
    }
  }
}
