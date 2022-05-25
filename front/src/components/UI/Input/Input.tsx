import React from "react";
import { InputWrapper, InputWidth } from "./Input.styled";

interface InputProps {
  maxLength?: number;
  name?: string;
  type?: "text" | "number";
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  value?: string;
}

const Input = (props: InputProps) => {
  return (
    <InputWrapper>
      <InputWidth
      maxLength = {props.maxLength}
      name = {props.name}
      type =  {props.type}
      defaultValue = {props.defaultValue}
      min = {props.min}
      max = {props.max}
      value = {props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      />
    </InputWrapper>
  );
}

export default Input;