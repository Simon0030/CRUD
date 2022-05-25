import styled from "styled-components";

export const EditPageStyled = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const EditTabsButtonStyled = styled.button`
  appearance: none;
  -webkit-appearance: none;

  padding: 10px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`

export const EditTabsInputStyled = styled.input`
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  margin: 0.3em;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box; 
  border: none;
`

export const EditTabsInputWideStyled = styled.textarea`
  font-family: inherit;
  resize: none;
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  margin: 0.3em;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  box-sizing: border-box; 
  border: none;
`

