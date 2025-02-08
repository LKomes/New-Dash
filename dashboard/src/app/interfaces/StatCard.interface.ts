import { Observable } from "rxjs";

export interface StatCard {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  yesterdayValue: string;
  lastWeekValue: string;
  yesterdayPercentage: string;
  lastWeekPercentage: string;
}

export interface StatCardService {
  getStatCardData(): Observable<StatCard[]>;
}
