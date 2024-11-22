import { Component } from '@angular/core';
import { ApiService } from '../../../../common/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-corporate-esg-dash-board',
  templateUrl: './corporate-esg-dash-board.component.html',
  styleUrls: ['./corporate-esg-dash-board.component.scss'],
  standalone: false,
})
export class CorporateEsgDashBoardComponent {

  constructor(public http:HttpClient,public api: ApiService) {}

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

  fetchData() {
    const url = "https://openapi.twse.com.tw/v1/opendata/t187ap03_P";
    this.api.cureGet(url).subscribe((res: any) => {
      // Assuming res is an array of objects and we need the first object
      const data = res[0];
      this.corporate = data.corporate || this.corporate;
      this.year = data.year || this.year;
      this.stockNumber = data.stockNumber || this.stockNumber;
      this.stockName = data.stockName || this.stockName;
      this.capital = data.capital || this.capital;
      this.chairman = data.chairman || this.chairman;
      this.president = data.president || this.president;
      this.etfName = data.etfName || this.etfName;
      this.businessScope = data.businessScope || this.businessScope;
      this.EScore = data.EScore || this.EScore;
      this.SScore = data.SScore || this.SScore;
      this.GScore = data.GScore || this.GScore;
      this.EAward = data.EAward || this.EAward;
      this.SAward = data.SAward || this.SAward;
      this.GAward = data.GAward || this.GAward;
      this.EHighScore = data.EHighScore || this.EHighScore;
      this.SHighScore = data.SHighScore || this.SHighScore;
      this.GHighScore = data.GHighScore || this.GHighScore;
      console.log(data);
    });
  }
}
