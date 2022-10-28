import { Todo } from 'src/app/model/todo';
export class GetTodo {
  static readonly type = '[Todo] GetTodo';
}

export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public todo: Todo) {}
}

export class UpdateTodo {
  static readonly type = '[Todo] Update';
  constructor(public todo: Todo, public id: number) {}
}

export class RemoveTodo {
  static readonly type = '[Todo] Remove';
  constructor(public id: number) {}
}

export class ToggleTodo {
  static readonly type = '[Todo] Toggle';
  constructor(public id: number) {}
}
