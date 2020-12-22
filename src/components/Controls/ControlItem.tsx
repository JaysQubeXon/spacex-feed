import React from "react";
import { string, bool, func } from "prop-types";
import { ControlItemProps } from "./Controls";

const ControlItem: React.FC<ControlItemProps> = ({ text, title, checked, triggerToggle }) => {
  const forLabel = text.replace(" ", "-");
  return (
    <div className="Controls-Checkbox" title={title}>
      <input
        type="checkbox"
        name={text}
        className="checkbox"
        checked={checked}
        onChange={triggerToggle}
        id={forLabel}
      />
      <label htmlFor={forLabel}>{text.toUpperCase()}</label>
    </div>
  );
};

ControlItem.propTypes = {
  text: string.isRequired,
  title: string.isRequired,
  checked: bool.isRequired,
  triggerToggle: func.isRequired,
};

export default ControlItem;
