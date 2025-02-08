import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Chart } from "chart.js/auto";

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./Chart.component.html",
  styleUrls: ["./Chart.component.css"],
})
export class ChartComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Label",
          "Label",
          "Label",
          "Label",
          "Label",
          "Label",
          "Label",
          "Label",
        ],
        datasets: [
          {
            label: "Label 1",
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3000],
            borderColor: "#4887f6",
            tension: 0.4,
          },
          {
            label: "Label 2",
            data: [2500, 3500, 4000, 3200, 2800, 3900, 2900, 3500],
            borderColor: "#59c3cf",
            tension: 0.4,
          },
          {
            label: "Label 3",
            data: [1500, 2500, 3000, 2200, 1800, 2900, 1900, 2500],
            borderColor: "#e2635e",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5000,
            ticks: {
              stepSize: 1000,
            },
          },
        },
      },
    });
  }
}
