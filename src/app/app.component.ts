import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[];
  todo: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  changeTitleOfTask(event: Event): void {
    const newTitle = (event.target as HTMLInputElement).value;
    this.todo = newTitle;
  }

  addTodo(): void {
    if (this.todo.trim() !== '') {
      this.todoService.addTodo(this.todo);
      this.todo = '';
    }
  }
}
