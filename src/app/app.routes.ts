import { Routes } from '@angular/router';
import { AdrDashboardComponent } from './components/adr-dashboard/adr-dashboard.component';

export const routes: Routes = [
  { path: '', component: AdrDashboardComponent },
  { path: 'dashboard', component: AdrDashboardComponent },
  { path: '**', redirectTo: '' }
];
