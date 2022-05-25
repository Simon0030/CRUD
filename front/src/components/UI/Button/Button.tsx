import { ButtonWrapper } from "./Button.styled"

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper onClick={props.onClick}>
      {props.title}
    </ButtonWrapper>
  )
}

export default Button
