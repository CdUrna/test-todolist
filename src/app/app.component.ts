import { Component } from '@angular/core';

import { TodoItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList = [
    {
      title: 'first',
      description: 'some description',
      isDone: false
    },
    {
      title: 'second',
      description: 'some description',
      isDone: false
    }
  ]


  onAddNewitem(item: TodoItem) {
    this.todoList.push(item);
  }
}
