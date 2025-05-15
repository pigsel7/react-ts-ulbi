import React, { FC } from "react";
import { ITodo } from "../types/types";


interface TodoItemProps{
    todo: ITodo;
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. "{todo.title}" {todo.completed ? "выполнена" : "не выполнена"}
        </div>
    )
}

export default TodoItem;