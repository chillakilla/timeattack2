import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchTodo, deleteTodo } from "../redux/modules/todos";

function TodoList({ isActive }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSwitchTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      dispatch(switchTodo({ id, isDone: !todo.isDone }));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ListContainer>
      <h4>{isActive ? "해야할 일" : "완료된 일"}</h4>
      {todos.map((todo) => (
        <List key={todo.id} isDone={todo.isDone}>
          <span>{todo.title}</span>
          <span>{todo.contents}</span>
          <IsDone>{todo.isDone ? "완료" : "할일"}</IsDone>
          <Button onClick={() => handleSwitchTodo(todo.id)}>완료</Button>
          <Button onClick={() => handleDeleteTodo(todo.id)}>삭제</Button>
        </List>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  background-color: lightcyan;
  padding: 20px;
`;

const List = styled.li`
  padding: 10px;
  list-style: none;
  background-color: lightcoral;
  margin: 5px;
`;

const Button = styled.button`
  padding: 10px;
`;

const IsDone = styled.span`
  color: red;
`;

export default TodoList;
