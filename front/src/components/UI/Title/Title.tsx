import React from "react";
import './Title.styled.ts';
import { TitleStyledWrapper } from "./Title.styled";

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  return (
    <TitleStyledWrapper> {props.title} </TitleStyledWrapper>);
}

export default Title;
