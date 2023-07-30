import { Component } from '@angular/core';
import { TASKS } from 'src/mock-tasks';
import { task } from 'src/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: task[] = TASKS;
}
