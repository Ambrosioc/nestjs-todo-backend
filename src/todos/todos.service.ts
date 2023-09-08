import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todos.interfaces';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    { id: 1, title: 'Todo', description: 'Do something', done: false },
    { id: 2, title: 'bread', description: 'buy bread', done: true },
    { id: 3, title: 'wine', description: 'buy wine', done: true },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string) {
    return this.todos.filter((todo) => todo.id === Number(id));
  }

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo];
  }

  update(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find((todo) => todo.id === +id);
    if (!todoToUpdate) {
      return new NotFoundException('Todo not found');
    }

    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }

    if (todo.title) {
      todoToUpdate.title = todo.title;
    }

    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map((todo) =>
      todo.id === +id ? todoToUpdate : todo,
    );
    this.todos = [...updatedTodos];
    return { updatedTodos: 1, todo: todoToUpdate };
  }

  delete(id: string) {
    const nbTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter((todo) => todo.id !== +id)];
    if (this.todos.length < nbTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
