import React from "react";
import { ProductFilterStyle } from "./ProductView.styled";

export enum SetNewValue {
  PRODUCTS = "Products",
  AUCTIONS = "Auctions",
  BOTH = "Both",
}

interface ProductsFilterProps {
  onChangeFilter: (value: string) => void;
  newValue: string;
}

const ProductFilter = (props: ProductsFilterProps) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ProductFilterStyle value={props.newValue} onChange={dropdownChangeHandler}>
      <option value={SetNewValue.PRODUCTS}>Products</option>
      <option value={SetNewValue.AUCTIONS}>Auctions</option>
      <option value={SetNewValue.BOTH}>Both</option>
    </ProductFilterStyle>
  );
};

export default ProductFilter;
