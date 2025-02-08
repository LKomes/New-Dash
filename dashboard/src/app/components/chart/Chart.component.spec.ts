import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChartComponent } from "./Chart.component";
import { Chart } from "chart.js/auto";

jest.mock("chart.js/auto");

describe("ChartComponent", () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render chart filters", () => {
    const filterElements = fixture.nativeElement.querySelectorAll(".filter");
    expect(filterElements.length).toBe(2);
  });

  it("should render date range selector", () => {
    const dateRangeElement = fixture.nativeElement.querySelector(".date-range");
    expect(dateRangeElement).toBeTruthy();
  });

  it("should render canvas element for chart", () => {
    const canvasElement = fixture.nativeElement.querySelector("#myChart");
    expect(canvasElement).toBeTruthy();
  });

  it("should create chart on init", () => {
    const createChartSpy = jest.spyOn(component, "createChart");
    component.ngOnInit();
    expect(createChartSpy).toHaveBeenCalled();
  });

  it("should create Chart instance with correct configuration", () => {
    component.createChart();
    expect(Chart).toHaveBeenCalledWith(expect.any(HTMLCanvasElement), {
      type: "line",
      data: expect.objectContaining({
        labels: expect.arrayContaining(["Label"]),
        datasets: expect.arrayContaining([
          expect.objectContaining({
            label: "Label 1",
            borderColor: "#4887f6",
          }),
          expect.objectContaining({
            label: "Label 2",
            borderColor: "#59c3cf",
          }),
          expect.objectContaining({
            label: "Label 3",
            borderColor: "#e2635e",
          }),
        ]),
      }),
      options: expect.objectContaining({
        responsive: true,
        scales: expect.objectContaining({
          y: expect.objectContaining({
            beginAtZero: true,
            max: 5000,
          }),
        }),
      }),
    });
  });

  it("should render chart legend", () => {
    const legendItems = fixture.nativeElement.querySelectorAll(".legend-item");
    expect(legendItems.length).toBe(3);
    expect(legendItems[0].textContent).toContain("Label 1");
    expect(legendItems[1].textContent).toContain("Label 2");
    expect(legendItems[2].textContent).toContain("Label 3");
  });
});
