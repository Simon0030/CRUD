import axios from "axios";
import {
  ButtonStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  SelectStyled,
} from "./AuctionInput.styled";
import { isEmpty } from "../../App/SalesArea/SalesArea";
import { useState } from "react";
import { address } from "../../App/SalesArea/SalesArea";

const AddAuction = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    productId: true,
  });

  const addAuctionHandler = (event: any) => {
    event.preventDefault();

    const enteredName = event.target.name.value;
    const enteredPublished = event.target.published.value;
    const enteredProductId = event.target.productId.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredProductIdIsValid = !isEmpty(enteredProductId);

    setFormInputsValidity({
      name: enteredNameIsValid,
      productId: enteredProductIdIsValid,
    });

    let enteredPublishedCheck = true;

    if (enteredPublished === "true") {
      enteredPublishedCheck = true;
    } else {
      enteredPublishedCheck = false;
    }

    if (enteredNameIsValid && enteredProductIdIsValid) {
      const enteredProductIdInt = parseInt(enteredProductId);
      axios.post(address + "auctionsites", {
        name: enteredName,
        published: enteredPublishedCheck,
        products: {
          connect: [
            {
              id: enteredProductIdInt,
            },
          ],
        },
      });
    }
  };

  return (
    <div>
      <FormStyled onSubmit={addAuctionHandler}>
        <div>
          <LabelStyled htmlFor="name">Auction Site Name</LabelStyled>
          <InputStyled type="text" name="name" />
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
          <LabelStyled htmlFor="name">Published</LabelStyled>
          <SelectStyled name="published">
            <option value="true">True</option>
            <option value="false">False</option>
          </SelectStyled>
          <LabelStyled htmlFor="name">Product's Id to assign</LabelStyled>
          <InputStyled type="text" name="productId" />
          {!formInputsValidity.productId && <p>Please enter a valid id!</p>}
        </div>
        <div>
          <ButtonStyled>Confirm</ButtonStyled>
        </div>
      </FormStyled>
    </div>
  );
};

export default AddAuction;
