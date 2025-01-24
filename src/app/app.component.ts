import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleTransferComponent } from "./components/schedule-transfer/schedule-transfer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScheduleTransferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transfer-front';
}
