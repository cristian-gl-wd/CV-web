import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLang = signal<string>('es');
  private translations = signal<any>({});

  constructor(private http: HttpClient) {
    const savedLang = localStorage.getItem('appLanguage') || 'en';
    this.setLanguage(savedLang);
  }

  public setLanguage(lang: string): void {
    this.currentLang.set(lang);
    localStorage.setItem('appLanguage', lang);
    this.loadTranslations(lang).subscribe(translations => {
      this.translations.set(translations);
    });
  }

  private loadTranslations(lang: string): Observable<any> {
    const filePath = `/i18n/${lang}.json`;
    return this.http.get<any>(filePath);
  }

  public get(key: string): string {
    const keys = key.split('.');
    let result = this.translations();

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  }
}