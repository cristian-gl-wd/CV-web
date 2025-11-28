import { Component, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Person } from '../../core/interfaces/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  @Input() person!: Person;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.timelineItems.changes.subscribe(() => {
      this.observeItems();
    });

    this.observeItems();
  }

  private observeItems() {
    this.timelineItems.forEach((item) => {
      this.observer?.observe(item.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
