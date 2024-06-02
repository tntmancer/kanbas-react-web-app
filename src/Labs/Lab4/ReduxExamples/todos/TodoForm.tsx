import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
return (
    <li className="list-group-item">
        <div className="input-group">
            <input
                value={todo.title}
                className="form-control"
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
            <div className="input-group-append">
                <button className="btn btn-success" onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click"> Add </button>
                <button className="btn btn-warning" onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click"> Update </button>
            </div>
        </div>
    </li>
);
}
