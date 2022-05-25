import { FieldsetStyledWrapper } from "./ProductPrices.styled"
import ProductPricesFirstCol from "../../UI/ProductPricesFirstCol/ProductPricesFirstCol";
import ProductPricesSecondCol from "../../UI/ProductPricesSecondCol/ProductPricesSecondCol";

interface ProductValues{
  amount: number,
  price: number
}

const ProductPrices = (props: ProductValues) => {
  return (
    <FieldsetStyledWrapper>
      <ProductPricesFirstCol amount={props.amount}/>
      <ProductPricesSecondCol price={props.price}/>
    </FieldsetStyledWrapper>
  )
}

export default ProductPrices