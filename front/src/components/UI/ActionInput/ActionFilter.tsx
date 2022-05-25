import React from "react";
import { AuctionFilterStyle } from "../AuctionView/AuctionView.styled";

export enum SetNewAction {
  ADD_PRODUCT = "adding",
  UPDATE_PRODUCT = "updating",
  DELETE_PRODUCT = "deleting",
  ADD_AUCTION = "addingAuction",
  DELETE_AUCTION = "deletingAuction",
  UPDATE_AUCTION = "updatingAuction",
}

interface AuctionFilterProps {
  onChangeFilter: (value: string) => void;
  newValue: string;
}

const AuctionFilter = (props: AuctionFilterProps) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <AuctionFilterStyle value={props.newValue} onChange={dropdownChangeHandler}>
      <option value={SetNewAction.ADD_PRODUCT}>Add Product</option>
      <option value={SetNewAction.UPDATE_PRODUCT}>Update Product</option>
      <option value={SetNewAction.DELETE_PRODUCT}>Delete Product</option>
      <option value={SetNewAction.ADD_AUCTION}>Add Auction</option>
      <option value={SetNewAction.UPDATE_AUCTION}>Update Auction</option>
      <option value={SetNewAction.DELETE_AUCTION}>Delete Auction</option>
    </AuctionFilterStyle>
  );
};

export default AuctionFilter;
