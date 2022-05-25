import styled from "styled-components";

export const TabsStyled = styled.div`
  margin-top: 15px;
  height: 370px;
  width: 95%;
  color: white;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`

export const SingleTab = styled.div`
  margin: 0.5em ;
  background-color: white;
  height: 12em;
  width: 8em;
  border-radius: 15px;
  color : black;
  flex: 0 0 auto;
  float: left;

`

export const TitleStyled = styled.div`
  height: 20%;
  border-bottom: solid 0.5px;
  font-weight: 300;
`

export const ContentStyled = styled.div`
  height: 60%;
  border-radius: inherit;
  font-size: small ;
  overflow: hidden;
  overflow-y: auto;

`
export const AddStyled = styled.button`
  display:inline-block;
  min-width:50px;
  height:50px;
  background:
    linear-gradient(#fff 0 0),
    linear-gradient(#fff 0 0),
    #bbb;
  background-position:center;
  background-size: 50% 4px,4px 50%;
  background-repeat:no-repeat;
  margin-top: 150px;
  cursor: pointer;
`
