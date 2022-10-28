import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../providers/todo.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { FormsModule } from '@angular/forms';
import { RemoveTodo, UpdateTodo } from '../providers/todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  editTodo: boolean = false;
  todoInput: string = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.editTodo = this.todo.completed;
  }

  updateToggle() {
    this.editTodo = !this.editTodo;
    this.todoInput = this.todo.title;
  }

  updateTodo(todo: Todo) {
    this.editTodo = !this.editTodo;
    const updatedTodo = { ...todo, title: this.todoInput };
    this.store.dispatch(new UpdateTodo(updatedTodo, todo.id));
  }

  deleteTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }
}
