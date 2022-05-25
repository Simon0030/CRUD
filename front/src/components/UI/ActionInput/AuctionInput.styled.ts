import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: #0b0b0a;
  background-color: white;
  border: 2px blue;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  :hover {
    background-color: #309744;
  }
`;

export const FormStyled = styled.form`
  height: 19rem;
  margin-bottom: 30rem;
  div {
    p {
      color: red;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
  }
`;

export const LabelStyled = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0;
  margin-top: 1rem;
`;

export const InputStyled = styled.input`
  border-radius: 4px;
  width: 10rem;
  max-width: 100%;
  margin-bottom: 1rem auto;
  margin-top: 0;
`;
export const SelectStyled = styled.select`
  border-radius: 4px;
  width: 5rem;
  max-width: 100%;
  margin-bottom: 1rem;
  margin-top: 0;
`;
