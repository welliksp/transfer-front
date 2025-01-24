import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleTransferComponent } from "./components/schedule-transfer/schedule-transfer.component";
import { ListTransferComponent } from './components/list-transfer/list-transfer.component';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScheduleTransferComponent, ListTransferComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showCreateTransfer = true; 

  toggleSection(): void {
    this.showCreateTransfer = !this.showCreateTransfer; 
  }
}