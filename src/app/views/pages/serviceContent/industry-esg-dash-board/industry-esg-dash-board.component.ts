import { ApiService } from '../../../../common/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-industry-esg-dash-board',
  templateUrl: './industry-esg-dash-board.component.html',
  styleUrl: './industry-esg-dash-board.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class IndustryEsgDashBoardComponent implements OnInit {
  constructor(public http: HttpClient, public api: ApiService) {}

  industry: string = '半導體';
  specialIndexs: Array<String> = ['資訊安全與隱私保護', '供應鏈管理'];
  specialIndex: String = '資訊安全與隱私保護';
  industryScope: string =
    '軟體服務業可分為應用/系統軟體設計開發、系統整合服務、資料處理服務、電子商務及通路經銷。應用/系統軟體設計開發業者負責各領域應用軟體開發，系統整合服務提供硬軟體整合與技術諮詢，資料處理服務包括資料庫建置、檢索、分析及網站代管，通路經銷從事軟體代理銷售。';

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.createChart();
    }
  }
  
  createChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(100, 100, 100, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(100, 100, 100, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    });
  }
}
