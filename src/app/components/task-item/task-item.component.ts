import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task=TASKS[0];
  @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();
  faTimes = faTimes;
  

  constructor() { }

  ngOnInit() {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }

  

}
