import React from "react";
import FallbackBadge from "../../assets/images/placeholder.png";
import LinkIcon from "../../assets/images/link.svg";
import { string, number } from "prop-types";
import { LaunchItemProps } from "./Feed";

const LaunchItem: React.FC<LaunchItemProps> = ({ badge, name, type, date, details, id, article }) => (
  <div className="Feed-Item">
    <div>
      {badge !== null ? (
        <img src={badge} alt="badge" className={"custom"} />
      ) : (
        <img src={FallbackBadge} alt="badge" className={"default"} />
      )}
    </div>
    <div>{name}</div>
    <div>{type}</div>
    <div>{date}</div>
    <div>{details}</div>
    <div>{id}</div>
    <div>
      <a href={article} target="_blank" rel="noopener noreferrer" title="click to find out">
        <img src={LinkIcon} alt="article" height="21" width="21" />
      </a>
    </div>
  </div>
);

LaunchItem.propTypes = {
  badge: string,
  name: string.isRequired,
  type: string.isRequired,
  date: string.isRequired,
  details: string.isRequired,
  id: number.isRequired,
  article: string.isRequired,
};

export default LaunchItem;
