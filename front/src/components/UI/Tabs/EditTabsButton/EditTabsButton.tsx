import { EditButtonStyled } from './EditTabsButton.styled';
import './EditTabsButton.styled.ts';

interface EditTabsButtonProps{
  label: string;
  onClick?: () => void;
}

const EditTabsButton = (props: EditTabsButtonProps) => {
  return(
    <EditButtonStyled onClick={props.onClick}> {props.label} </EditButtonStyled>
  );
};

export default EditTabsButton;