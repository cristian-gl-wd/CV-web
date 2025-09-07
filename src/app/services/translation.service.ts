import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setFallbackLang('en');
this.translate.use('en');
    // const browserLang = this.translate.getBrowserLang();
    // if (browserLang && browserLang === this.translate. getLangs().find(lang => lang === browserLang)) {
    //   this.translate.use(browserLang);
    // } else {
    //   this.translate.use('en');
    // }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLang(): string {
    return this.translate.getCurrentLang();
  }
}
