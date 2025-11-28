import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Person } from '../../data/profiles.data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  @Input() person!: Person;
}
