import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { ADR } from '../models/adr.model';

@Injectable({
  providedIn: 'root'
})
export class AdrService {
  private apiUrl = 'http://localhost:3000/api/finance/adrs/brasil';

  constructor(private http: HttpClient) {}

  getBrazilianAdrs(): Observable<ADR[]> {
    return this.http.get<ADR[]>(this.apiUrl)
      .pipe(
        retry(1), // Tentar novamente uma vez em caso de falha
        catchError((err) => {
          console.error('Erro na requisição:', err);
          throw err;
        })
      );
  }
} 