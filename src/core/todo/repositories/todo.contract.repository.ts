import { Todo, TodoPresenter } from '../schemas/todo.contract';

export interface FindAllTodoRepository {
  findAll(): Promise<Todo[]>;
}

export interface CreateAllTodoRepository {
  create(todo: Todo): Promise<TodoPresenter>;
}

export interface DeleteAllTodoRepository {
  remove(id: string): Promise<TodoPresenter>;
}

export interface TodoRepository
  extends FindAllTodoRepository,
    CreateAllTodoRepository,
    DeleteAllTodoRepository {}
