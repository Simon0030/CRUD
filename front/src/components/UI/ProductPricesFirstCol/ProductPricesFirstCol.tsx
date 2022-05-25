import { Information, StyledInput, FirstCol } from "./ProductPricesFirstCol.styled"

const ProductPricesFirstCol = (props: { amount: number} ) => {
  return (
      <FirstCol>
        <Information>
          Liczba dostęnych sztuk:
        </Information>
        <StyledInput>
          <input type="number" id="fname" name="fname" defaultValue={props.amount}/>
        </StyledInput>
        <Information>
          Czy produkt jest już opublikowany:
        </Information>
        <StyledInput>
          <input type="radio" name="radio" value="TAK" />
          TAK
          <input type="radio" name="radio" value="NIE" />
          NIE
        </StyledInput>
        <Information>
          Czy produkt został sprzedany:
        </Information>
        <StyledInput>
          <input type="radio" name="radio" value="TAK" />
          TAK
          <input type="radio" name="radio" value="NIE" />
          NIE
        </StyledInput>
        <Information>
          Cena zakupu:
        </Information>
        <StyledInput>
          <input type="number" id="fname" name="fname" /> zł
        </StyledInput>
        <Information>
          Data ostatniej modyfikacji produktu:
        </Information>
        <StyledInput>
          <input type="date" id="fname" name="fname" />
        </StyledInput>
      </FirstCol>
  )
}

export default ProductPricesFirstCol
