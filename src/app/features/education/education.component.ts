import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Person } from '../../core/interfaces/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input() person!: Person;
}
