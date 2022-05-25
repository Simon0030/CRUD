import axios from "axios";
import {
  ButtonStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
} from "./AuctionInput.styled";
import { isEmpty } from "../../App/SalesArea/SalesArea";
import { useState } from "react";
import { address } from "../../App/SalesArea/SalesArea";

const UpdateProduct = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    id: true,
  });

  const updateProductHandler = (event: any) => {
    event.preventDefault();

    const enteredId = event.target.elements.id.value;
    const enteredName = event.target.elements.name.value;

    const enteredIdIsValid = !isEmpty(enteredId);
    const enteredNameIsValid = !isEmpty(enteredName);

    setFormInputsValidity({
      name: enteredNameIsValid,
      id: enteredIdIsValid,
    });

    if (enteredIdIsValid && enteredNameIsValid) {
      axios.put(address + "products/" + enteredId, {
        name: enteredName,
      });
    }
  };

  return (
    <div>
      <FormStyled onSubmit={updateProductHandler}>
        <div>
          <LabelStyled htmlFor="name">Product Id</LabelStyled>
          <InputStyled type="text" name="id" />
          {!formInputsValidity.id && <p>Please enter a valid id!</p>}
          <LabelStyled htmlFor="name">New Product Name</LabelStyled>
          <InputStyled type="text" name="name" />
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div>
          <ButtonStyled>Confirm</ButtonStyled>
        </div>
      </FormStyled>
    </div>
  );
};

export default UpdateProduct;
