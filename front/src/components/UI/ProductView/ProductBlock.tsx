import { ProductViewStyle } from "./ProductView.styled";
import { ProductViewText } from "./ProductView.styled";
import { useHistory } from "react-router";
import { Router } from "react-router";

export interface ProductProps {
  key: string;
  name: string
  description: string
  category: string
  amount: number
  price: number
}

const ProductBlock = (props: ProductProps) => {
  const history = useHistory();
  
    const navigateTo = () => {
        history.push({
          pathname: '/product',
          state: {
            description: props.description,
            name: props.name,
            category: props.category,
            amount: props.amount,
            price: props.price
          }
        })
    }
  return (
    <div onClick={navigateTo}>
    <ProductViewStyle key={props.key}>
      <ProductViewText>{props.name}</ProductViewText>
    </ProductViewStyle>
    <Router history={history}/>
    </div>
  );
};

export default ProductBlock;
