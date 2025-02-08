import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { DataAnalysisService } from "./data-analysis.service";

describe("DataAnalysisService", () => {
  let service: DataAnalysisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataAnalysisService],
    });
    service = TestBed.inject(DataAnalysisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should fetch stat card data", () => {
    const mockData = {
      /* mock stat card data */
    };
    service.getStatCardData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      "https://api.example.com/data-analysis/stat-cards"
    );
    expect(req.request.method).toBe("GET");
    req.flush(mockData);
  });

  it("should fetch chart data", () => {
    const mockData = {
      /* mock chart data */
    };
    service.getChartData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      "https://api.example.com/data-analysis/chart-data"
    );
    expect(req.request.method).toBe("GET");
    req.flush(mockData);
  });

  it("should apply filter", () => {
    const mockResponse = { success: true };
    service.applyFilter("filter1", "value1").subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      "https://api.example.com/data-analysis/apply-filter"
    );
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual({ filterId: "filter1", value: "value1" });
    req.flush(mockResponse);
  });

  it("should update date range", () => {
    const mockResponse = { success: true };
    service
      .updateDateRange("2023-01-01", "2023-12-31")
      .subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

    const req = httpMock.expectOne(
      "https://api.example.com/data-analysis/update-date-range"
    );
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual({
      startDate: "2023-01-01",
      endDate: "2023-12-31",
    });
    req.flush(mockResponse);
  });
});
