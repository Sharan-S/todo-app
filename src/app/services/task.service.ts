import { Injectable } from '@angular/core';
import { task } from '../../task';
import { TASKS } from '../../mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<task[]> {
    console.log("fetching Observable of data from file through service")
    return of(TASKS);
  }
}
