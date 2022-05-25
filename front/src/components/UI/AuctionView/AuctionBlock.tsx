import { AuctionViewStyle } from "./AuctionView.styled";
import { AuctionViewText } from "./AuctionView.styled";
import { AuctionViewTitle } from "./AuctionView.styled";
import { ProductProps } from "../ProductView/ProductBlock";

export interface AuctionProps {
  key: string;
  name:string
  products: Array<ProductProps>
}

const AuctionBlock = (props: AuctionProps) => {
  return (
    <AuctionViewStyle>
      <AuctionViewTitle>{props.name}</AuctionViewTitle>
      {props.products.map((product: ProductProps) => (
          <><AuctionViewText>{product.name}</AuctionViewText></>
        ))}
    </AuctionViewStyle>
  );
};

export default AuctionBlock;
