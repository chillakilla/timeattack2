import React from "react";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Home() {
  return (
    <>
      <Header />
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}
