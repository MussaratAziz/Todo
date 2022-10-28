import { SelectorContext } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/service/todoservice.service';
import { AddTodo, GetTodo, RemoveTodo, UpdateTodo } from './todo.actions';

export class TodoStateModel {
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})
@Injectable()
export class TodoState {
  constructor(private todoService: TodoserviceService) {}

  // piece of information from the state object
  @Selector([TodoState])
  static selectTodo(state: TodoStateModel) {
    return state.todos;
  }

  @Selector()
  static getSelectedTodo(state: TodoStateModel) {
    return state.selectedTodo;
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    const todo = {
      id: state.todos.length + 1,
      title: action.todo.title,
      completed: action.todo.completed,
    };
    ctx.setState({
      ...state,
      todos: [...state.todos, todo],
    });
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
    const state = ctx.getState();
    const todos = [...state.todos];
    const todoIndex = todos.findIndex((item) => item.id === action.id);
    todos[todoIndex] = action.todo;
    ctx.setState({
      ...state,
      todos: todos,
    });
  }
  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    const filteredArray = state.todos.filter((item) => item.id !== action.id);
    ctx.setState({
      ...state,
      todos: filteredArray,
    });
  }
}
