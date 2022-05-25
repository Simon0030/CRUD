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

const DeleteAuction = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    id: true,
  });

  const deleteAuctionHandler = (event: any) => {
    event.preventDefault();

    const enteredId = event.target.elements.id.value;

    const enteredIdIsValid = !isEmpty(enteredId);

    setFormInputsValidity({
      id: enteredIdIsValid,
    });

    if (enteredIdIsValid) {
      axios.delete(address + "auctionsites/" + enteredId, {});
    }
  };

  return (
    <div>
      <FormStyled onSubmit={deleteAuctionHandler}>
        <div>
          <LabelStyled htmlFor="name">Auction Site Id</LabelStyled>
          <InputStyled type="text" name="id" />
          {!formInputsValidity.id && <p>Please enter a valid id!</p>}
        </div>
        <div>
          <ButtonStyled>Confirm</ButtonStyled>
        </div>
      </FormStyled>
    </div>
  );
};

export default DeleteAuction;
