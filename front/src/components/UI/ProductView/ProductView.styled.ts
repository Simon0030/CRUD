import styled from "styled-components";

export const ProductViewStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 8rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 2rem auto;
`;

export const ProductViewText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductViewList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-top: 0;
`;

export const ProductFilterStyle = styled.select`
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 4px;
`;
