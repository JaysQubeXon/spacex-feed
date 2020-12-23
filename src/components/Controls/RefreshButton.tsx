import React from "react";
import RefreashIcon from "../../assets/images/refresh.svg";
import { bool, func } from "prop-types";
import "./refresh.scss";
import { RefreshButtonProps } from "./Controls";
import cn from "classnames";

const RefreshButton: React.FC<RefreshButtonProps> = ({ isLoading, onClick }) => (
  <button type="button" disabled={isLoading} className={`refresh`} onClick={onClick} title="click to refresh feed">
    <img alt="refresh" src={RefreashIcon} className={cn("refresh-icon", { "refresh-spin": isLoading })} />
  </button>
);

RefreshButton.propTypes = {
  isLoading: bool.isRequired,
  onClick: func.isRequired,
};

export default RefreshButton;
