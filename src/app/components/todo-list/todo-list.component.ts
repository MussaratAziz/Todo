import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { TodoState } from '../providers/todo.state';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.selectTodo) todos$!: Observable<Todo[]>;
  constructor() {}

  ngOnInit(): void {}
}
