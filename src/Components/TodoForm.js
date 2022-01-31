import React, { useState, useContext } from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    InputGroupAddon
} from "reactstrap"

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");

    //Here we want to dispatch data to central state so took only dispatch
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(todoString===""){
            return alert("Enter todo")
        }

        //object to store todo
        const todo = {
            todoString,
            id: v4()
        }

        // dispatch takes 2 values with it
        dispatch({
            type : ADD_TODO,
            payload : todo
        });

        setTodoString("");
    }


    return (

        // Input text box and button
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next todo"
                        value = {todoString}
                        onChange = {(event) => setTodoString(event.target.value)}
                    />

                    <InputGroupAddon addonType="prepend">
                        <Button color="warning">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;