import React, { SyntheticEvent } from "react";
import RefreashIcon from "../../assets/images/refresh.svg";
import { bool, func } from "prop-types";
import "./refresh.scss";
import { RefreshButtonProps } from "./Controls";

const RefreshButton: React.FC<RefreshButtonProps> = ({ isLoading, onClick }) => (
  <button
    type="button"
    disabled={isLoading}
    className={`refresh`}
    onClick={(e: SyntheticEvent) => onClick(e)}
    title="click to refresh feed"
  >
    <img alt="refresh" src={RefreashIcon} className={`refresh-icon${isLoading ? ` refresh-spin` : ""}`} />
  </button>
);

RefreshButton.propTypes = {
  isLoading: bool.isRequired,
  onClick: func.isRequired,
};

export default RefreshButton;
