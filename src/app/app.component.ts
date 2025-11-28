import { Component, OnInit, signal, inject, ViewChildren, QueryList, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CvDataService } from './core/services/cv-data.service';
import { TranslationService } from './core/services/translation.service';
import { ThemeService } from './core/services/theme.service';
import { Person } from './core/interfaces/portfolio.model';
import { ContactComponent } from './features/contact/contact.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { EducationComponent } from './features/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ContactComponent,
    ProfileComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  activeSection = signal<string>('profile');
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  person: Person | undefined;

  private sectionObserver!: IntersectionObserver;

  constructor(
    public translationService: TranslationService,
    public themeService: ThemeService,
    private cvDataService: CvDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.cvDataService.getPerson('cristian-gl-wd').subscribe((data) => {
      this.person = data;
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initSectionObserver();
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

  changeLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }

  t(key: string): string {
    return this.translationService.get(key);
  }
}
