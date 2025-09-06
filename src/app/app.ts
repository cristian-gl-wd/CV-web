import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('fadeInSection', { read: ElementRef }) sections!: QueryList<ElementRef>;
  
  isDarkMode = false;
  currentLang = '';

  personalInfo = {
    linkedin: 'linkedin.com/in/cristian-gl-wd',
    github: 'github.com/cristian-gl-wd'
  };

  skills = {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C#'],
    frontend: ['Angular', 'RxJS', 'NgRx', 'SCSS', 'HTML'],
    backend: ['Node.js', 'MySQL'],
    tools: ['Git', 'Jira', 'Docker']
  };

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
  }

  changeLang(lang: string): void {
    this.translationService.changeLanguage(lang);
    this.currentLang = lang;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}