import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataAnalysisComponent } from "./DataAnalysis.component";
import { HeaderComponent } from "../header/Header.component";
import { SidebarComponent } from "../sidebar/Sidebar.component";
import { StatCardComponent } from "../statCard/StatCard.component";
import { ChartComponent } from "../chart/Chart.component";

describe("DataAnalysisComponent", () => {
  let component: DataAnalysisComponent;
  let fixture: ComponentFixture<DataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DataAnalysisComponent,
        HeaderComponent,
        SidebarComponent,
        StatCardComponent,
        ChartComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render header component", () => {
    const headerElement = fixture.nativeElement.querySelector("app-header");
    expect(headerElement).toBeTruthy();
  });

  it("should render sidebar component", () => {
    const sidebarElement = fixture.nativeElement.querySelector("app-sidebar");
    expect(sidebarElement).toBeTruthy();
  });

  it("should render four stat card components", () => {
    const statCardElements =
      fixture.nativeElement.querySelectorAll("app-stat-card");
    expect(statCardElements.length).toBe(4);
  });

  it("should render chart component", () => {
    const chartElement = fixture.nativeElement.querySelector("app-chart");
    expect(chartElement).toBeTruthy();
  });
});
