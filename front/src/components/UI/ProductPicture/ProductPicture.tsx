import { FieldsetStyledWrapper, Information, StyledInput, Picture } from "./ProductPicture.styled"

const ProductDates = () => {
  return (
    <FieldsetStyledWrapper>
      <Information>
        Link do aukcji:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Picture>
        Dołącz zdjecie produktu.
      </Picture>
    </FieldsetStyledWrapper>
  )
}

export default ProductDates
