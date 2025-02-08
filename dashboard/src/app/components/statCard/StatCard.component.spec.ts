import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatCardComponent } from "./StatCard.component";

describe("StatCardComponent", () => {
  let component: StatCardComponent;
  let fixture: ComponentFixture<StatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatCardComponent);
    component = fixture.componentInstance;
    component.title = "Test Title";
    component.value = "1000";
    component.percentage = "10";
    component.isPositive = "true";
    component.yesterdayValue = "900";
    component.lastWeekValue = "800";
    component.yesterdayPercentage = "5";
    component.lastWeekPercentage = "15";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display title and value", () => {
    const titleElement = fixture.nativeElement.querySelector(".stat-title");
    const valueElement = fixture.nativeElement.querySelector(".stat-value");
    expect(titleElement.textContent).toBe("Test Title");
    expect(valueElement.textContent).toBe("1000");
  });

  it("should display percentage with correct class", () => {
    const percentageElement =
      fixture.nativeElement.querySelector(".stat-percentage");
    expect(percentageElement.textContent).toContain("10%");
    expect(percentageElement.classList).toContain("positive");
  });

  it("should display yesterday and last week values", () => {
    const detailValues =
      fixture.nativeElement.querySelectorAll(".detail-value");
    expect(detailValues[0].textContent).toContain("900");
    expect(detailValues[1].textContent).toContain("800");
  });

  it("should display yesterday and last week percentages", () => {
    const detailPercentages =
      fixture.nativeElement.querySelectorAll(".detail-percentage");
    expect(detailPercentages[0].textContent).toContain("5%");
    expect(detailPercentages[1].textContent).toContain("15%");
  });
});
