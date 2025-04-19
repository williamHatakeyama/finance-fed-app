import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  private initTheme(): void {
    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Se tem preferência salva, use-a, senão use a preferência do sistema
    const isDarkMode = savedTheme ? savedTheme === 'true' : prefersDark;
    
    this.darkMode.next(isDarkMode);
    this.updateTheme(isDarkMode);
  }

  toggleDarkMode(): void {
    const newDarkMode = !this.darkMode.value;
    this.darkMode.next(newDarkMode);
    this.updateTheme(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  }

  private updateTheme(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
} 