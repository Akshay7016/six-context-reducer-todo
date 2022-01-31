import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap"
import { FaCheckDouble } from "react-icons/fa"
import { TodoContext } from "../context/TodoContext";

import { REMOVE_TODO } from "../context/action.types";

const Todos = () => {

    // Here we need to display do so taken "todos" and to remove todo we need to dipatch its id so taken dispatch
    const { todos, dispatch } = useContext(TodoContext);

    return (
        <ListGroup className="mt-5 mb-2 items">
            {
                //To display todos
                todos.map((todo) => (
                    <ListGroupItem key={todo.id}>
                        {todo.todoString}  {/* Came from TodoForm.js - 17 */}
                        <span
                            className="float-right"
                            // To delete todo
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_TODO,
                                    payload: todo.id
                                })
                            }}>
                            <FaCheckDouble />
                        </span>
                    </ListGroupItem>
                ))
            }

        </ListGroup>
    );
}

export default Todos;