import React, { useMemo } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useGetLaunchesQuery, useGetRocketsQuery } from "../data/spacex";
import { useControls } from "../data/hooks/useControls";
import { filterLandSuccess, filterReused, filterWithReddit } from "../data/actions";
import Controls from "./Controls/Controls";
import Feed from "./Feed/Feed";
import { Launch, Rocket } from "../index.d";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    width: "100vw",
    height: "100vh",
  },
  header: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  "@keyframes logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

const capitalize = (str: string) => {
  return str.replace(str[0], str[0].toUpperCase());
};

const App: React.FC = () => {
  const { data, error, isLoading } = useGetLaunchesQuery(undefined);
  const { data: rocketData, isLoading: isRocketDataLoading } = useGetRocketsQuery(undefined);

  const { withLandSuccess, withReused, withReddit } = useControls();

  const launches = useMemo(() => {
    let feed: Launch[] = data || [];
    if (withLandSuccess) feed = filterLandSuccess(feed);
    if (withReused) feed = filterReused(feed);
    if (withReddit) feed = filterWithReddit(feed);

    if (isRocketDataLoading || !rocketData) return feed;

    const withRocketTypes = feed.map((launch) => {
      const rocket = rocketData.find((rocket: Rocket) => rocket.id === launch.rocket);
      return {
        ...launch,
        rocket_type: `${capitalize(rocket!.engines.type)} ${rocket!.engines.version}`,
      };
    });
    return withRocketTypes;
  }, [data, rocketData, isRocketDataLoading, withLandSuccess, withReused, withReddit]);

  const classes = useStyles();
  if (isLoading || !data) return null;
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>SpaceX Launches</h1>
      </header>
      <div>
        <Controls isLoading={isLoading} />
        <Feed feed={launches} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
