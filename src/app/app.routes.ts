import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleTransferComponent } from './components/schedule-transfer/schedule-transfer.component';
import { ListTransferComponent } from './components/list-transfer/list-transfer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-transfer', component: ScheduleTransferComponent },
  { path: 'list-transfers', component: ListTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}