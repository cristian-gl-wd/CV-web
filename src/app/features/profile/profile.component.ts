import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Person } from '../../core/interfaces/portfolio.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() person!: Person;
}
