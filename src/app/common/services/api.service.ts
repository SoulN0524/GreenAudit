import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  cureGet(endpoint: string) {
    const url = `${endpoint}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*',
    });
    return this.http.get<any>(url, { headers });
  }

  getApiData(endpoint: string) {
    const apiUrl = `${environment.api}/${endpoint}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*',
    });
    return this.http.get<any>(apiUrl, { headers });
  }

  postApiData(endpoint: string, data: any) {
    const apiUrl = `${environment.api}/${endpoint}`;
    return this.http.post<any>(apiUrl, data);
  }

  putApiData(endpoint: string, data: any) {
    const apiUrl = `${environment.api}/${endpoint}`;
    return this.http.put<any>(apiUrl, data);
  }

  deleteApiData(endpoint: string) {
    const apiUrl = `${environment.api}/${endpoint}`;
    return this.http.delete<any>(apiUrl);
  }
}
