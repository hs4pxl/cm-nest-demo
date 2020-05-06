import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import * as uuid from 'uuid/v1';

@Injectable()
export class TodoService {

    todoArray:Todo[] = []

    addTodo(title:string, subtitle:string){
        console.log(`Title: ${title}, Subtile: ${subtitle}`)
        const todo = new Todo();
        todo.id = uuid();
        todo.title = title;
        todo.subtitle = subtitle;
        this.todoArray.push(todo);
    }

    getTodos(){
        return this.todoArray
    }
}
