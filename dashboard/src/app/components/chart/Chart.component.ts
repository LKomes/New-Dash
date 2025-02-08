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
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
        datasets: [
          {
            label: "Label 1",
            data: [1000, 3000, 2000, 2780, 1890, 2390, 3490, 3000],
            backgroundColor: "#4887f6",
            
          },
          {
            label: "Label 2",
            data: [2500, 3500, 4000, 3200, 2800, 3900, 2900, 3500],
            backgroundColor: "#59c3cf",
          },
          {
            label: "Label 3",
            data: [1500, 2500, 3000, 2200, 1800, 2900, 1900, 2500],
            backgroundColor: "#e2635e",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 10000,
            ticks: {
              stepSize: 1000,
            },
          },
        },
      },
    });
  }
}
