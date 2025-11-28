import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/portfolio.model';
import { mockPerson } from '../../data/mock-portfolio';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor() { }

  getPerson(profileId: string = 'cristian-gl-wd'): Observable<Person | undefined> {
    return of(mockPerson);
  }
}
