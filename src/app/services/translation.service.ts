import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang() ?? 'es';
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang ?? this.translate.defaultLang ?? 'es';
  }
}
