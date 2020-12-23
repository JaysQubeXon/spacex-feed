import React from "react";
import moment from "moment";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import LaunchItem from "./LaunchItem";

import { Launch } from "../../index.d";
import "./feed.scss";
import ResultCount from "./ResultCount";

export interface FeedProps {
  feed: Launch[];
  isLoading: boolean;
  error: unknown;
}

export interface LaunchItemProps {
  badge: string | null;
  name: string;
  type: string;
  date: string;
  details: string;
  id: number;
  article: string | null;
}

export interface ResultCountProps {
  isRefresh: boolean;
  feed: Launch[];
}

const Feed: React.FC<FeedProps> = ({ feed: launches, error, isLoading }) => {
  return (
    <div className="Feed">
      <div className="Feed-Head">
        <div>Badge</div>
        <div>Rocket Name</div>
        <div>Rocket Type</div>
        <div>Launch Date</div>
        <div>Details</div>
        <div>ID</div>
        <div>Article</div>
      </div>

      {error && <>Oh no, there was an error</>}
      {!isLoading && launches && !!launches.length ? (
        <TransitionGroup>
          {launches.map((launch: Launch) => {
            const badge = launch.links.patch.small !== null ? launch.links.patch.small : null;
            const date = moment(launch.date_utc).format("MM/DD/YYYY");
            const details = launch.details !== null ? launch.details : "";
            return (
              <CSSTransition key={launch.flight_number} timeout={400} classNames="item">
                <LaunchItem
                  id={launch.flight_number}
                  name={launch.name}
                  type={launch.rocket_type}
                  date={date}
                  badge={badge}
                  details={details}
                  article={launch.links.article}
                />
              </CSSTransition>
            );
          })}
          <ResultCount isRefresh={isLoading} feed={launches} />
        </TransitionGroup>
      ) : (
        <ResultCount isRefresh={isLoading} feed={launches} />
      )}
    </div>
  );
};

export default Feed;
