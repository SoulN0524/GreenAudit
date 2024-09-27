import { Observable } from "rxjs";
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getApiData(endpoint: string) {
        const apiUrl = `${environment.api}/${endpoint}`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'accept': '*/*',
        });
        return this.http.get<any>(apiUrl, { headers });
    }
}