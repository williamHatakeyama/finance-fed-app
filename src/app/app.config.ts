import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { routes } from './app.routes';

// Função de interceptação para simular a API de ADRs
const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === 'http://localhost:3000/api/finance/adrs/brasil' && req.method === 'GET') {
    const mockAdrData = [
      {
        "symbol": "PBR",
        "name": "Petróleo Brasileiro S.A. - Petrobras",
        "price": 11.62,
        "previousClose": 11.22,
        "change": 0.4,
        "changePercent": 3.56506,
        "volume": 32517788,
        "marketCap": 70479716352,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:01.000Z"
      },
      {
        "symbol": "VALE",
        "name": "Vale S.A.",
        "price": 9.11,
        "previousClose": 9,
        "change": 0.11,
        "changePercent": 1.22222,
        "volume": 26674740,
        "marketCap": 38888583168,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:03.000Z"
      },
      {
        "symbol": "ITUB",
        "name": "Itaú Unibanco Holding S.A.",
        "price": 5.66,
        "previousClose": 5.59,
        "change": 0.0699997,
        "changePercent": 1.25223,
        "volume": 21231317,
        "marketCap": 56140972032,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:03.000Z"
      },
      {
        "symbol": "BBD",
        "name": "Banco Bradesco S.A.",
        "price": 2.22,
        "previousClose": 2.2,
        "change": 0.02,
        "changePercent": 0.90909,
        "volume": 25041051,
        "marketCap": 21672906752,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      },
      {
        "symbol": "ABEV",
        "name": "Ambev S.A.",
        "price": 2.4,
        "previousClose": 2.33,
        "change": 0.0700002,
        "changePercent": 3.0043,
        "volume": 69769561,
        "marketCap": 37553283072,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      },
      {
        "symbol": "GGB",
        "name": "Gerdau S.A.",
        "price": 2.54,
        "previousClose": 2.52,
        "change": 0.02,
        "changePercent": 0.79365,
        "volume": 6140395,
        "marketCap": 5123966976,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      },
      {
        "symbol": "SID",
        "name": "Companhia Siderúrgica Nacional",
        "price": 1.52,
        "previousClose": 1.47,
        "change": 0.05,
        "changePercent": 3.40136,
        "volume": 1516608,
        "marketCap": 2015656704,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      },
      {
        "symbol": "CIG",
        "name": "Companhia Energética de Minas Gerais - CEMIG",
        "price": 1.75,
        "previousClose": 1.69,
        "change": 0.0599999,
        "changePercent": 3.55029,
        "volume": 2545206,
        "marketCap": 5644852224,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      },
      {
        "symbol": "EBR",
        "name": "Centrais Elétricas Brasileiras S.A. - Eletrobrás",
        "price": 7.23,
        "previousClose": 7.02,
        "change": 0.21,
        "changePercent": 2.99145,
        "volume": 1392366,
        "marketCap": 15816274944,
        "currency": "USD",
        "timestamp": "2025-04-17T20:00:02.000Z"
      }
    ];

    // Retornar dados simulados como um HttpResponse
    return of(new HttpResponse({
      status: 200,
      body: mockAdrData
    }));
  }
  
  return next(req);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([mockApiInterceptor]))
  ]
};
