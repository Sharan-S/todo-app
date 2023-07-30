import { Injectable } from '@angular/core';
import { task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): task[] {
    console.log("fetching from file through service")
    return TASKS;
  }
}
