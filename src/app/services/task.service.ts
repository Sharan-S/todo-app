import { Injectable } from '@angular/core';
import { task } from '../../task';
import { TASKS } from '../../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = "http://localhost:3100/"
  constructor(private httpclient: HttpClient) { }

  getTasks(): Observable<task[]> {
    console.log("fetching Observable of data from api through service")
    var endpointUrl = this.url + "tasks";
    return this.httpclient.get<task[]>(endpointUrl);
  }
}
