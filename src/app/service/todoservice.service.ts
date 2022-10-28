import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  constructor() {}

  addTodo(todo: Todo): Observable<Todo> {
    return new Observable((observer) => {
      observer.next(todo);
    });
  }

  updateTodo(): Observable<Todo> {
    return new Observable((observer) => {
      observer.next();
    });
  }

  deleteTodo() {}
}
