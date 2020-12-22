import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { BaseQueryFn, FetchBaseQueryError } from "@rtk-incubator/rtk-query/dist";
import { CombinedState, QueryStatePhantomType } from "@rtk-incubator/rtk-query/dist/apiState";
import { QueryDefinition } from "@rtk-incubator/rtk-query/dist/endpointDefinitions";
import { Reducer } from "react";
import { Launch } from "../index.d";
import { controlsReducer, ControlsState } from "./reducers/controls";
import { spacexApi } from "./spacex";

const { reducerPath, reducer, middleware } = spacexApi;

export const store = configureStore({
  reducer: {
    [reducerPath]: reducer,
    controls: controlsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export interface AppStore {
  [reducerPath]: Reducer<
    CombinedState<
      {
        getLaunches: QueryDefinition<
          unknown,
          BaseQueryFn<string, unknown, FetchBaseQueryError, Record<string, unknown>>,
          never,
          Launch[],
          string
        >;
        getRockets: QueryDefinition<any, any, any, any>;
      },
      never
    > &
      QueryStatePhantomType<any>,
    AnyAction
  >;
  controls: ControlsState;
}
