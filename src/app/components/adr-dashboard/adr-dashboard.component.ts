import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdrService } from '../../services/adr.service';
import { ADR } from '../../models/adr.model';

@Component({
  selector: 'app-adr-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adr-dashboard.component.html',
  styles: []
})
export class AdrDashboardComponent implements OnInit {
  adrs: ADR[] = [];
  totalChange: number = 0;
  totalChangePercent: number = 0;
  loading: boolean = true;
  error: string | null = null;

  constructor(private adrService: AdrService) {}

  ngOnInit(): void {
    this.loadAdrs();
  }

  loadAdrs(): void {
    this.loading = true;
    console.log('Carregando ADRs...');
    this.adrService.getBrazilianAdrs().subscribe({
      next: (data) => {
        console.log('ADRs carregados com sucesso:', data);
        this.adrs = data;
        this.calculateTotals();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar os dados das ADRs brasileiras.';
        this.loading = false;
        console.error('Erro ao carregar ADRs:', err);
      }
    });
  }

  calculateTotals(): void {
    this.totalChange = this.adrs.reduce((total, adr) => total + adr.change, 0);
    this.totalChangePercent = this.adrs.reduce((total, adr) => total + adr.changePercent, 0);
  }
} 