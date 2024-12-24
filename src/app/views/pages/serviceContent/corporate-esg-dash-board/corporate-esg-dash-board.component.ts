import { Component } from '@angular/core';
import { ApiService } from '../../../../common/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

interface News {
  title: string;
  content: string;
  href: string;
  date: string;
  source: string;
}

@Component({
  selector: 'app-corporate-esg-dash-board',
  templateUrl: './corporate-esg-dash-board.component.html',
  styleUrls: ['./corporate-esg-dash-board.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class CorporateEsgDashBoardComponent {
  constructor(public http: HttpClient, public api: ApiService) {}

  corporate: string = '台灣積體電路製造股份有限公司';
  year: string = '112';
  stockNumber: string = '2330';
  stockName: string = '台積電';
  capital: string = '259,327,332,420';
  chairman: string = '魏哲家';
  president: string = '魏哲家';
  etfName: string = '00692 富邦公司治理';
  businessScope: string =
    '依客戶之訂單與其提供之產品設計說明，以從事製造與銷售積體電路以及其他晶圓半導體裝置。提供前述產品之封裝與測試服務、積體電路之電腦輔助設計技術服務。提供製造光罩及其設計服務。';
  EScore: Number = 10;
  SScore: Number = 8.5;
  GScore: Number = 9;
  EAward: string = '廢水處理噸數年度第一';
  SAward: string = '上下游關係年度第二';
  GAward: string = '供應鏈管理年度第一';
  EHighScore: string = '生物多樣性PR99';
  SHighScore: string = '薪酬福利PR95';
  GHighScore: string = '政治影響指數PR93';
  newsList: News[] = [
    {
      title: 'News Title 1',
      content: 'Content of news item 1.',
      href: '#',
      date: '2023-01-01',
      source: 'Source 1',
    },
    {
      title: 'News Title 2',
      content: 'Content of news item 2.',
      href: '#',
      date: '2023-01-02',
      source: 'Source 2',
    },
    {
      title: 'News Title 3',
      content: 'Content of news item 3.',
      href: '#',
      date: '2023-01-03',
      source: 'Source 3',
    },
  ];

  fetchData() {
    const url = 'https://openapi.twse.com.tw/v1/opendata/t187ap03_P';
    this.api.cureGet(url).subscribe((res) => {
      console.log(res);
    });
  }
}
