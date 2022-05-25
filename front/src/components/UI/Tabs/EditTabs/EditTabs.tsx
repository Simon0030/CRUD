import React, { ChangeEvent, useState } from 'react';
import { PackageData } from '../../../App/HelpArea/HelpArea';
import { EditPageStyled, EditTabsButtonStyled, EditTabsInputStyled, EditTabsInputWideStyled } from './EditTabs.styled';

interface EditTabsProps {
  element : PackageData;
  updateElementHandler: (state : PackageData) => void;
  history : any; //Problem z importem typu History<>
}

const EditTabs = (props: EditTabsProps) => {
  const [state, setState] = useState<PackageData>(props.element);
  
  const handleChangeContent = (e : ChangeEvent<HTMLInputElement>) => {
    setState({ id: state.id, name: e.target.value, content: state.content });
  }

  const handleChangeName = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setState({ id: state.id, name: state.name, content: e.target.value });
  }

  const updateElement = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.name === "" || state.content === "") {
      alert("Wypelnij wszystkie pola!");
      return;
    }

    props.updateElementHandler(state);
    props.history.push("/help");

  };
  return (
    <EditPageStyled>
      <form onSubmit={updateElement}>
        Name:
        <EditTabsInputStyled 
          type="text"
          name="name"
          placeholder='Name'
          value={state.name}
          onChange={handleChangeContent} 
          />

        Content:
        <EditTabsInputWideStyled
          name="content"
          placeholder='Content'
          value={state.content}
          contentEditable='true'
          onChange={handleChangeName} 
          />

        <EditTabsButtonStyled>Edit</EditTabsButtonStyled>

      </form>
    </EditPageStyled>
  )
}

export default EditTabs;