import { Component } from '@angular/core';
import { TASKS } from '../../../mock-tasks';
import { task } from '../../../task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks!: task[];

  constructor(private taskService: TaskService) { };

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
