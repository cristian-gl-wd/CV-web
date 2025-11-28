import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/portfolio.model';
import { PROFILES } from '../../data/profiles.data';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor() { }

  getPerson(profileId: string = 'cristian-gl-wd'): Observable<Person | undefined> {
    return of(PROFILES[profileId]);
  }
}