import React from "react";
import styled from "styled-components";

function Input() {
  return (
    <InputContainer>
      <InputSection>
        <Label>제목 : &nbsp;</Label>
        <Input placeholder="text"></Input>
        <Label>내용 : &nbsp;</Label>
        <InputText placeholder="text"></InputText>
        <Button>추가하기</Button>
      </InputSection>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  background-color: red;
  padding: 20px;
`;

const InputSection = styled.section`
  padding: 10px;
  background-color: lemonchiffon;
`;

const Label = styled.label`
  width: 100px;
`;

const InputText = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  cursor: pointer;
`;

export default Input;
