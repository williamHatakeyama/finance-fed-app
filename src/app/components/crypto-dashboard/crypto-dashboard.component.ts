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
      <h1>Dashboard de Criptomoedas</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div *ngFor="let crypto of cryptos" 
             class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <!-- Cabeçalho do Card -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <span class="text-2xl font-bold text-gray-800 dark:text-white">{{crypto.symbol}}</span>
              <span class="ml-2 text-gray-500 dark:text-gray-400">{{crypto.name}}</span>
            </div>
          </div>

          <!-- Preço e Variação -->
          <div class="mb-4">
            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {{crypto.price | currency:'USD':'symbol':'1.2-2'}}
            </div>
            <div class="flex items-center" 
                 [ngClass]="{'text-green-600 dark:text-green-400': crypto.change >= 0, 
                            'text-red-600 dark:text-red-400': crypto.change < 0}">
              <svg *ngIf="crypto.change >= 0" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <svg *ngIf="crypto.change < 0" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="ml-1">{{crypto.changePercent | number:'1.2-2'}}%</span>
            </div>
          </div>

          <!-- Informações Adicionais -->
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500 dark:text-gray-400">Cap. Mercado</span>
              <span class="text-gray-700 dark:text-gray-300">{{crypto.marketCap | currency:'USD':'symbol':'1.0-0'}}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500 dark:text-gray-400">Volume 24h</span>
              <span class="text-gray-700 dark:text-gray-300">{{crypto.volume | currency:'USD':'symbol':'1.0-0'}}</span>
            </div>
          </div>
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