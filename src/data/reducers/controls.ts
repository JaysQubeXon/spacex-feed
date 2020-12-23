import { reducerWithInitialState } from "typescript-fsa-reducers";
import { resetControls, toggleLandSuccess, toggleReused, toggleWithReddit, triggerRefresh } from "../actions";

const initialState: ControlsState = {
  isLoading: false,
  withLandSuccess: false,
  withReused: false,
  withReddit: false,
};

export const controlsReducer = reducerWithInitialState(initialState)
  .case(triggerRefresh.started, (state) => {
    console.log("here now");
    return { ...state, isLoading: true };
  })
  .case(triggerRefresh.failed, (state) => ({ ...state, isLoading: false }))
  .case(triggerRefresh.done, (state) => ({ ...state, isLoading: false }))
  .case(toggleLandSuccess, (state) => ({ ...state, withLandSuccess: !state.withLandSuccess }))
  .case(toggleReused, (state) => ({ ...state, withReused: !state.withReused }))
  .case(toggleWithReddit, (state) => ({ ...state, withReddit: !state.withReddit }))
  .case(resetControls, (state) => ({ ...state, ...initialState }))
  .build();
export interface ControlsState {
  isLoading: boolean;
  withLandSuccess: boolean;
  withReused: boolean;
  withReddit: boolean;
}
