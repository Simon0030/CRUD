import ProductDates from "../../UI/ProductPicture/ProductPicture";
import ProductNames from "../../UI/ProductNames/ProductNames";
import ProductPrices from "../../UI/ProductPrices/ProductPrices";
import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import {
  ProductAreaStyled,
  Container,
  Send,
  FirstRow,
} from "./ProductArea.styled";

interface ProductsProps {
  location: {
    state: {
      name: string;
      description: string;
      category: string;
      amount: number;
      price: number;
    };
  };
}

const ProductArea = (props: ProductsProps) => {
  let name = props.location.state.name;
  let description = props.location.state.description;
  let category = props.location.state.category;
  let amount = props.location.state.amount;
  let price = props.location.state.price;
  return (
    <ProductAreaStyled>
      <h1>Product Area</h1>
      <Container>
        <FirstRow>
          <ProductNames
            name={name}
            description={description}
            category={category}
          />
          <ProductPrices amount={amount} price={price} />
        </FirstRow>
        <ProductDates />
        <Send>
          <input type="submit" value="Wyślij" />
        </Send>
      </Container>
      <RouteLink to={APP_PAGE.SALES}>
        <Button title="Powrót do panelu sprzedaży" />
      </RouteLink>
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </ProductAreaStyled>
  );
};

export default ProductArea;
