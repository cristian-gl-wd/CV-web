import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Inject,
  PLATFORM_ID,
  signal,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslationService } from './core/services/translation.service';
import { ThemeService } from './core/services/theme.service';

import { CvDataService } from './core/services/cv-data.service';
import { Person, Skill } from './core/interfaces/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslationService, ThemeService, CvDataService],
})
export class AppComponent implements AfterViewInit, OnInit {
  activeSection = signal<string>('profile');
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  person: Person | undefined;

  private sectionObserver!: IntersectionObserver;
  private animationObserver!: IntersectionObserver;

  constructor(
    public translationService: TranslationService,
    public themeService: ThemeService,
    private cvDataService: CvDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.cvDataService.getPersonData().subscribe((data) => {
      this.person = data;
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initSectionObserver();
        this.initAnimationObserver();
      }, 0);
    }
  }

  private initSectionObserver(): void {
    const options = { root: null, threshold: 0.7 };
    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);
    this.sections.forEach((section) => {
      this.sectionObserver.observe(section.nativeElement);
    });
  }

  private initAnimationObserver(): void {
    const options = { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    this.animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    this.timelineItems.forEach((item) => {
      this.animationObserver.observe(item.nativeElement);
    });
  }

  changeLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }

  downloadCV(): void {
    window.print();
  }

  t(key: string): string {
    return this.translationService.get(key);
  }
}
