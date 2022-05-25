import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import Products from "../../UI/ProductView/ProductSector";
import { SalesAreaStyled } from "./SalesArea.styled";
import Auctions from "../../UI/AuctionView/AuctionSector";
import React, { useEffect, useState } from "react";
import ProductFilter from "../../UI/ProductView/ProductFilter";
import { SetNewValue } from "../../UI/ProductView/ProductFilter";
import axios from "axios";
import AuctionFilter from "../../UI/ActionInput/ActionFilter";
import AddProduct from "../../UI/ActionInput/AddProduct";
import DeleteProduct from "../../UI/ActionInput/DeleteProduct";
import UpdateProduct from "../../UI/ActionInput/UpdateProduct";
import AddAuction from "../../UI/ActionInput/AddAuction";
import DeleteAuction from "../../UI/ActionInput/DeleteAuction";
import UpdateAuction from "../../UI/ActionInput/UpdateAuction";
import { SetNewAction } from "../../UI/ActionInput/ActionFilter";

export const isEmpty = (value: string) => value.trim() === "";
export const address = "http://localhost:4000/";

const SalesArea = () => {
  const [value, setValue] = useState<string>(SetNewValue.PRODUCTS);
  const [action, setAction] = useState<string>(SetNewAction.ADD_PRODUCT);
  const [products, setProducts] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    getProducts();
    getAuctions();
  }, []);

  const getProducts = () => {
    axios.get(address + "products").then((response) => {
      const data = response.data;
      setProducts(data);
    });
  };

  const getAuctions = () => {
    axios.get(address + "auctionsites").then((response) => {
      let data = response.data;
      setAuctions(data);
    });
  };

  const handleChange = (selected: string) => {
    setValue(selected);
  };

  const actionHandleChange = (selected: string) => {
    setAction(selected);
  };

  const shouldDisplayProducts =
    value === SetNewValue.PRODUCTS || value === SetNewValue.BOTH;
  const shouldDisplayAuctions =
    value === SetNewValue.AUCTIONS || value === SetNewValue.BOTH;
  const shouldDisplayAdding = action === SetNewAction.ADD_PRODUCT;
  const shouldDisplayUpdating = action === SetNewAction.UPDATE_PRODUCT;
  const shouldDisplayDeleting = action === SetNewAction.DELETE_PRODUCT;
  const shouldDisplayAddingAuction = action === SetNewAction.ADD_AUCTION;
  const shouldDisplayDeletingAuction = action === SetNewAction.DELETE_AUCTION;
  const shouldDisplayUpdatingAuction = action === SetNewAction.UPDATE_AUCTION;

  return (
    <SalesAreaStyled>
      <Header />
      <ProductFilter newValue={value} onChangeFilter={handleChange} />
      {shouldDisplayProducts && <Products items={products} />}
      {shouldDisplayAuctions && <Auctions items={auctions} />}
      <AuctionFilter newValue={action} onChangeFilter={actionHandleChange} />
      {shouldDisplayAdding && <AddProduct />}
      {shouldDisplayDeleting && <DeleteProduct />}
      {shouldDisplayUpdating && <UpdateProduct />}
      {shouldDisplayAddingAuction && <AddAuction />}
      {shouldDisplayUpdatingAuction && <UpdateAuction />}
      {shouldDisplayDeletingAuction && <DeleteAuction />}
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaStyled>
  );
};

export default SalesArea;
