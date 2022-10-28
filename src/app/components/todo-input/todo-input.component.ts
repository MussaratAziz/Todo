import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddTodo } from '../providers/todo.actions';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  showValidationErrors: boolean = false;
  todo: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    completed: [false],
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {}

  addTodo() {
    if (this.todo.invalid) return (this.showValidationErrors = true);

    this.store.dispatch(new AddTodo(this.todo.value));
    this.todo.reset();
    return (this.showValidationErrors = false);
  }
}
