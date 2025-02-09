import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StatCard } from "../interfaces/StatCard.interface";

@Injectable({
  providedIn: "root",
})
export class DataAnalysisService {
  private apiUrl = "./assets";

  constructor(private http: HttpClient) {}

  
  getStatCardData(): Observable<any> {
    return this.http.get<StatCard>(`${this.apiUrl}/stat-cards.json`);
  }

  /**
  getChartData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart-data.json`);
  }

  applyFilter(filterId: string, value: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply-filter`, { filterId, value });
  }

  updateDateRange(startDate: string, endDate: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-date-range`, {
      startDate,
      endDate,
    });
  }
    **/
}
