import React, { SyntheticEvent } from "react";
import { bool } from "prop-types";

import "./controls.scss";

import ControlItem from "./ControlItem";
import RefreshButton from "./RefreshButton";
import { useControls } from "../../data/hooks/useControls";
import { useDispatch } from "react-redux";
import { toggleLandSuccess, toggleReused, toggleWithReddit, triggerRefresh } from "../../data/actions";
export interface ControlProps {
  isLoading: boolean;
}

export interface RefreshButtonProps {
  isLoading: boolean;
  onClick: (e: SyntheticEvent) => void;
}

export interface ControlItemProps {
  text: string;
  title: string;
  checked: boolean;
  triggerToggle: () => void;
}

const Controls: React.FC<ControlProps> = ({ isLoading }) => {
  const { withLandSuccess, withReused, withReddit, isRefreshing } = useControls();
  const dispatch = useDispatch();

  const handleRefresh = (e: SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    dispatch(triggerRefresh);
  };

  const onToggleLandSuccess = () => {
    dispatch(toggleLandSuccess());
  };

  const onToggleReused = () => {
    dispatch(toggleReused());
  };

  const onToggleWithReddit = () => {
    dispatch(toggleWithReddit());
  };

  return (
    <div className="Controls">
      <RefreshButton isLoading={isLoading || isRefreshing} onClick={handleRefresh} />

      <div className="Controls-Items">
        <ControlItem
          text="land success"
          checked={withLandSuccess}
          triggerToggle={onToggleLandSuccess}
          title="filter launches that successfully landed"
        />
        <ControlItem
          text="reused"
          checked={withReused}
          triggerToggle={onToggleReused}
          title="filter launches that were reused"
        />
        <ControlItem
          text="with reddit"
          checked={withReddit}
          triggerToggle={onToggleWithReddit}
          title="filter launches that were featured on reddit"
        />
      </div>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  isLoading: bool.isRequired,
};
