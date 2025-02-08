import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/Header.component";
import { SidebarComponent } from "../sidebar/Sidebar.component";
import { StatCardComponent } from "../statCard/StatCard.component";
import { ChartComponent } from "../chart/Chart.component";

@Component({
  selector: "data-analysis",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    StatCardComponent,
    ChartComponent,
  ],
  templateUrl: "./DataAnalysis.component.html",
  styleUrls: ["./DataAnalysis.component.css"],
})
export class DataAnalysisComponent {}
