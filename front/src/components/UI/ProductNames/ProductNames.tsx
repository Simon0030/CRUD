import {
  FieldsetStyledWrapper,
  Information,
  StyledInput,
} from "./ProductNames.styled";

interface ProductDescription {
  name: string;
  description: string;
  category: string;
}

export const ProductNames = (props: ProductDescription) => {
  return (
    <FieldsetStyledWrapper>
      <Information>Nazwa produktu:</Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" defaultValue={props.name} />
      </StyledInput>
      <Information>Opis produktu:</Information>
      <StyledInput>
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={props.description}
        />
      </StyledInput>
      <Information>Nazwa kategorii:</Information>
      <StyledInput>
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={props.category}
        />
      </StyledInput>
      <Information>Nazwa kategorii w serwisie:</Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>Nazwa kategorii w programie Mercurius:</Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>Nazwa konta na jakim jest wystawiony produkt:</Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
    </FieldsetStyledWrapper>
  );
};

export default ProductNames;
