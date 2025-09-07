import { Injectable } from '@angular/core';
import { mockPerson } from '../../data/mock-portfolio';
import { Person } from '../interfaces/portfolio.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvDataService {
  getPersonData(): Observable<Person> {
    return of(mockPerson);
  }
}