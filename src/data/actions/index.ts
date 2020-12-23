import { Launch } from "../../index.d";
import {
  REFRESH_REQUESTED,
  RESET_CONTROLS,
  TOGGLE_LAND_SUCCESS,
  TOGGLE_REUSED,
  TOGGLE_WITH_REDDIT,
} from "../constants";

import { ControlsState } from "../reducers/controls";

import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory("SPACEX");

export const triggerRefresh = actionCreator.async(REFRESH_REQUESTED, async () => {
  // TODO: should refresh be implemented here or in rtk-query?
  return true;
});

export const resetControls = actionCreator<void>(RESET_CONTROLS);
export const toggleLandSuccess = actionCreator<void>(TOGGLE_LAND_SUCCESS);
export const toggleReused = actionCreator<void>(TOGGLE_REUSED);
export const toggleWithReddit = actionCreator<void>(TOGGLE_WITH_REDDIT);

export function filterLandSuccess(feed: Launch[]) {
  return feed.filter((item) => (item.success ? true : false));
}

export function filterReused(feed: Launch[]) {
  return feed.filter(({ fairings: { reused } }) => reused);
}

export function filterWithReddit(feed: Launch[]) {
  return feed.filter(({ links: { reddit } }: Launch) => {
    function check(prop: string | null) {
      return prop !== null && prop.length > 0;
    }
    if (check(reddit.launch) || check(reddit.media) || check(reddit.recovery) || check(reddit.campaign)) {
      return false;
    }
    return true;
  });
}

export function filterFeed(feed: Launch[], { withLandSuccess, withReused, withReddit }: ControlsState) {
  let theFeed = feed;
  if (withLandSuccess) theFeed = filterLandSuccess(theFeed);
  if (withReused) theFeed = filterReused(theFeed);
  if (withReddit) theFeed = filterWithReddit(theFeed);
  return theFeed;
}
