import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Crypto {
  symbol: string;
  name: string;
  price: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
}

@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Dashboard de Criptomoedas</h1>
        
        <div class="flex items-center space-x-2">
          <button 
            class="flex items-center space-x-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Atualizar</span>
          </button>
        </div>
      </div>
      
      <!-- Cards com estatísticas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-primary-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="ml-5">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Capitalização de Mercado Total</h3>
                <div class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">$1.52T</div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm text-green-600 dark:text-green-400">
              <span class="font-medium">+2.5%</span> em relação a ontem
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-5">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Volume Diário</h3>
                <div class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">$78.6B</div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm text-red-600 dark:text-red-400">
              <span class="font-medium">-1.2%</span> em relação a ontem
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="ml-5">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Dominância do Bitcoin</h3>
                <div class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">43.8%</div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm text-green-600 dark:text-green-400">
              <span class="font-medium">+0.4%</span> em relação a ontem
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Criptomoedas -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Top Criptomoedas</h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            As criptomoedas mais importantes por capitalização de mercado
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Moeda</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Preço</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">24h %</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cap. Mercado</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Volume</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr *ngFor="let crypto of cryptos">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                      <span class="text-lg font-medium">{{ crypto.symbol.charAt(0) }}</span>
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900 dark:text-white">{{ crypto.name }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ crypto.symbol }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  ${{ crypto.price.toLocaleString() }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm" 
                    [ngClass]="crypto.changePercent >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'">
                  {{ crypto.changePercent >= 0 ? '+' : '' }}{{ crypto.changePercent.toFixed(2) }}%
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  ${{ formatLargeNumber(crypto.marketCap) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  ${{ formatLargeNumber(crypto.volume) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CryptoDashboardComponent implements OnInit {
  cryptos: Crypto[] = [];

  constructor() {}

  ngOnInit(): void {
    // Dados simulados
    this.cryptos = [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 63850.42,
        previousPrice: 62750.10,
        change: 1100.32,
        changePercent: 1.75,
        marketCap: 1250000000000,
        volume: 32000000000
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        price: 3475.18,
        previousPrice: 3512.30,
        change: -37.12,
        changePercent: -1.06,
        marketCap: 418000000000,
        volume: 15700000000
      },
      {
        symbol: 'BNB',
        name: 'Binance Coin',
        price: 528.42,
        previousPrice: 519.86,
        change: 8.56,
        changePercent: 1.65,
        marketCap: 81200000000,
        volume: 2900000000
      },
      {
        symbol: 'SOL',
        name: 'Solana',
        price: 158.75,
        previousPrice: 150.23,
        change: 8.52,
        changePercent: 5.67,
        marketCap: 68500000000,
        volume: 4200000000
      },
      {
        symbol: 'XRP',
        name: 'Ripple',
        price: 0.5743,
        previousPrice: 0.5812,
        change: -0.0069,
        changePercent: -1.19,
        marketCap: 30500000000,
        volume: 1850000000
      }
    ];
  }

  formatLargeNumber(num: number): string {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }
} 