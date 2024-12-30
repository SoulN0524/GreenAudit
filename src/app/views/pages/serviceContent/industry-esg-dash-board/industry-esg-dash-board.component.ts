import { ApiService } from '../../../../common/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-industry-esg-dash-board',
  templateUrl: './industry-esg-dash-board.component.html',
  styleUrl: './industry-esg-dash-board.component.scss',
  standalone: true,
  imports: [NgFor, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class IndustryEsgDashBoardComponent implements OnInit {
  constructor(public http: HttpClient, public api: ApiService) {}

  selectedIndustry!: string;
  industries: Array<String> = [
    '水泥工業',
    '食品工業',
    '塑膠工業',
    '建材營造',
    '汽車工業',
    '紡織纖維',
    '運動休閒',
    '電子零組件業',
    '電機機械',
    '電器電纜',
    '生技醫療業',
    '化學工業',
    '玻璃陶瓷',
    '造紙工業',
    '鋼鐵工業',
    '橡膠工業',
    '航運業',
    '電腦及週邊設備業',
    '半導體業',
    '其他電子業',
    '通信網路業',
    '光電業',
    '電子通路業',
    '資訊服務業',
    '油電燃氣業',
    '觀光餐旅',
    '金融保險業',
    '貿易百貨',
    '數位雲端',
    '綠能環保',
    '居家生活',
    '其他',
  ];
  selectedCompanies!: Array<String>;
  companies: Array<String> = [
    '台積電',
    '聯發科',
    '華碩',
    '鴻海',
    '宏碁',
    '微星',
  ];
  industry: string = '半導體';
  specialIndexs: Array<String> = ['資訊安全與隱私保護', '供應鏈管理'];
  specialIndex: String = '資訊安全與隱私保護';
  industryScope: string =
    '軟體服務業可分為應用/系統軟體設計開發、系統整合服務、資料處理服務、電子商務及通路經銷。應用/系統軟體設計開發業者負責各領域應用軟體開發，系統整合服務提供硬軟體整合與技術諮詢，資料處理服務包括資料庫建置、檢索、分析及網站代管，通路經銷從事軟體代理銷售。';
  selectedYear!: string;
  years: Array<String> = ['2019', '2020', '2021', '2022', '2023'];

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
