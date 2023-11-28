import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <p>Header</p>
      <p>TODOLIST</p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: lightgreen;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export default Header;
