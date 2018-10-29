import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  picker: Date;
  todoName: String;
  completed: boolean;

  constructor(private todoService: TodoService) { }

  addTodo(name, date, completed) {
    this.todoService.add();
  }

  ngOnInit() {
  }

}
