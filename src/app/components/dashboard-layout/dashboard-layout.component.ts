import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Conteúdo Principal com Sidebar -->
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="flex h-[calc(100vh-4rem)]">
          <app-sidebar></app-sidebar>
        </aside>
        
        <!-- Conteúdo Principal -->
        <main class="flex-1 p-6 overflow-y-auto">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Footer -->
      <footer class="bg-white dark:bg-gray-800 shadow-sm mt-auto py-4 z-10">
        <div class="max-w-full px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Finance Dashboard | Dados fornecidos para fins educacionais
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class DashboardLayoutComponent { } 