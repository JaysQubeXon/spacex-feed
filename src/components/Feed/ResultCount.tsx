import React from "react";
import RefreashIcon from "../../assets/images/refresh.svg";
import { ResultCountProps } from "./Feed";
import { any, arrayOf, bool } from "prop-types";

const ResultCount: React.FC<ResultCountProps> = ({ isRefresh, feed }) => {
  const count = `${!!feed.length ? feed.length : "NO"} LAUNCHES FOUND`;
  return (
    <div className="Feed-Item results-row">
      {!isRefresh ? (
        <p className="results-none">{count}</p>
      ) : (
        <img alt="refresh" src={RefreashIcon} className={`results-icon${isRefresh ? ` refresh-spin` : ""}`} />
      )}
    </div>
  );
};

ResultCount.defaultProps = {
  feed: [],
};

ResultCount.propTypes = {
  isRefresh: bool.isRequired,
  feed: arrayOf(any).isRequired,
};

export default ResultCount;
