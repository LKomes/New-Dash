import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-stat-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./StatCard.component.html",
  styleUrls: ["./StatCard.component.css"],
})
export class StatCardComponent {
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() percentage: string = "";
  @Input() isPositive: string = "true";
  @Input() yesterdayValue: string = "";
  @Input() lastWeekValue: string = "";
  @Input() yesterdayPercentage: string = "";
  @Input() lastWeekPercentage: string = "";
}
