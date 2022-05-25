import {
  Information,
  StyledInput,
  SecondCol,
} from "./ProductPricesSecondCol.styled";

const ProductPricesSecondCol = (props: { price: number }) => {
  return (
    <SecondCol>
      <Information>Cena w jakiej został wystawiony:</Information>
      <StyledInput>
        <input
          type="number"
          id="fname"
          name="fname"
          defaultValue={props.price}
        />{" "}
        zł
      </StyledInput>
      <Information>Czy wysyłka jest możliwa poprzez portal:</Information>
      <StyledInput>
        <input type="radio" name="radio" value="TAK" />
        TAK
        <input type="radio" name="radio" value="NIE" />
        NIE
      </StyledInput>
      <Information>Jeżeli tak, cena wysyłki:</Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" />
      </StyledInput>
      <Information>Kwota prowizji:</Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" /> zł
      </StyledInput>
      <Information>Data utworzenia produktu:</Information>
      <StyledInput>
        <input type="date" id="fname" name="fname" />
      </StyledInput>
    </SecondCol>
  );
};

export default ProductPricesSecondCol;
