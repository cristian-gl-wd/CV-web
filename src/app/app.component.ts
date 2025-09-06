import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mainContent') mainContentEl!: ElementRef;

  isDarkMode = false;
  currentLang = '';
  activeSection = '';

  personalInfo = {
    linkedin: 'linkedin.com/in/cristian-gl-wd',
    github: 'github.com/cristian-gl-wd',
  };

  skills = {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C#'],
    frontend: ['Angular', 'RxJS', 'NgRx', 'SCSS', 'HTML'],
    backend: ['Node.js', 'MySQL'],
    tools: ['Git', 'Jira', 'Docker'],
  };

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        root: this.mainContentEl.nativeElement,
        threshold: 0.5,
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
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

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
