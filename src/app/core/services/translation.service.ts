import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLang = signal<string>('es');

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('appLanguage') || 'es';
    this.setLanguage(savedLang);
    this.translate.setDefaultLang('es');
  }

  public setLanguage(lang: string): void {
    this.currentLang.set(lang);
    localStorage.setItem('appLanguage', lang);
    this.translate.use(lang);
  }

  public get(key: string): string {
    return this.translate.instant(key);
  }
}