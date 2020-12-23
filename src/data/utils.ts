import { Launch } from "../index.d";

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
