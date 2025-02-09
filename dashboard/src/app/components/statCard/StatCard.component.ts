import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataAnalysisService } from "../../services/data-analysis.service";
import { Observable, of } from "rxjs";
import { StatCard } from "../../interfaces/StatCard.interface";

@Component({
  selector: "app-stat-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./StatCard.component.html",
  styleUrls: ["./StatCard.component.css"],
})
export class StatCardComponent  {
  public statCard$: Observable<StatCard> = of();
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() percentage: string = "";
  @Input() isPositive: string = "true";
  @Input() yesterdayValue: string = "";
  @Input() lastWeekValue: string = "";
  @Input() yesterdayPercentage: string = "";
  @Input() lastWeekPercentage: string = "";


}


