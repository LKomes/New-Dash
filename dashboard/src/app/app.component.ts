import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataAnalysisComponent } from './components/dataAnalysis/DataAnalysis.component';

@Component({
  selector: 'app-root',
  imports: [DataAnalysisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
