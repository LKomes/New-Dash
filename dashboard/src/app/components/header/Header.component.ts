import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.css"],
})
export class HeaderComponent {}
