import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { ScheduleTransferComponent } from './app/components/schedule-transfer/schedule-transfer.component';
import { ListTransferComponent } from './app/components/list-transfer/list-transfer.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
  
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create-transfer', component: ScheduleTransferComponent },
      { path: 'list-transfers', component: ListTransferComponent },
    ]),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
