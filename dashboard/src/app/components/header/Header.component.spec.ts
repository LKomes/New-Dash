import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./Header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render logo", () => {
    const logoElement = fixture.nativeElement.querySelector(".logo");
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute("src")).toBe(
      "https://cdn.builder.io/api/v1/image/assets/4ed16216b751438587fef52dd74da871/b9fc4ee4351a2a5085c2989096c180b9f5958cd67136a867fa75524bf88f6177?apiKey=4ed16216b751438587fef52dd74da871&"
    );
    expect(logoElement.getAttribute("alt")).toBe("Game Center Logo");
  });

  it("should render title", () => {
    const titleElement = fixture.nativeElement.querySelector(".title");
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe("Game Center");
  });

  it("should render search input", () => {
    const searchInput = fixture.nativeElement.querySelector("#searchInput");
    expect(searchInput).toBeTruthy();
    expect(searchInput.getAttribute("placeholder")).toBe("Search");
  });

  it("should render action icons", () => {
    const iconElements = fixture.nativeElement.querySelectorAll(".icons img");
    expect(iconElements.length).toBe(3);
  });
});
