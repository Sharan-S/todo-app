import { Component, Input } from '@angular/core';
import { task } from 'src/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() taskInput!:task;
}
