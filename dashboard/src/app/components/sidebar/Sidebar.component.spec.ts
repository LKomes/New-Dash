import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SidebarComponent } from "./Sidebar.component";

describe("SidebarComponent", () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render all menu items", () => {
    const menuItems = fixture.nativeElement.querySelectorAll(".menu-item");
    expect(menuItems.length).toBe(6);
  });

  it("should have active class on Data Analysis menu item", () => {
    const activeItem = fixture.nativeElement.querySelector(".menu-item.active");
    expect(activeItem).toBeTruthy();
    expect(activeItem.textContent).toContain("Data Analysis");
  });

  it("should render menu icons", () => {
    const menuIcons = fixture.nativeElement.querySelectorAll(".menu-icon");
    expect(menuIcons.length).toBe(4);
  });

  it("should render expand icon for Games menu item", () => {
    const expandIcon = fixture.nativeElement.querySelector(".expand-icon");
    expect(expandIcon).toBeTruthy();
    expect(expandIcon.getAttribute("alt")).toBe("Expand");
  });
});
