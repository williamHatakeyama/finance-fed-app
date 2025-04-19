import { Routes } from '@angular/router';
import { AdrDashboardComponent } from './components/adr-dashboard/adr-dashboard.component';
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'adrs', pathMatch: 'full' },
      { path: 'adrs', component: AdrDashboardComponent },
      { path: 'crypto', component: CryptoDashboardComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
