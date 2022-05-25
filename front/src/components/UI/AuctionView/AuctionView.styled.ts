import styled from "styled-components";

export const AuctionViewStyle= styled.li`
   display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 2rem auto;
`;
export const AuctionViewText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
`;

export const AuctionViewList = styled.ul`
  display:flex;  
  list-style:none;
  gap: 2rem;
  margin-top: 0;
`;

export const AuctionViewTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: aquamarine;
`;

export const AuctionFilterStyle = styled.select`
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 2rem;
`;
