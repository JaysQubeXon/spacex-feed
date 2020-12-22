import {
  REFRESH_FAILED,
  REFRESH_REQUESTED,
  REFRESH_SUCCEEDED,
  RESET_CONTROLS,
  TOGGLE_LAND_SUCCESS,
  TOGGLE_REUSED,
  TOGGLE_WITH_REDDIT,
} from "../constants";

const initialState: ControlsState = {
  isLoading: false,
  withLandSuccess: false,
  withReused: false,
  withReddit: false,
};

export function controlsReducer(state: ControlsState = initialState, action: any) {
  switch (action.type) {
    case REFRESH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case REFRESH_FAILED:
    case REFRESH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
      };
    case TOGGLE_LAND_SUCCESS:
      return {
        ...state,
        withLandSuccess: !state.withLandSuccess,
      };
    case TOGGLE_REUSED:
      return {
        ...state,
        withReused: !state.withReused,
      };
    case TOGGLE_WITH_REDDIT:
      return {
        ...state,
        withReddit: !state.withReddit,
      };
    case RESET_CONTROLS:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export interface ControlsState {
  isLoading: boolean;
  withLandSuccess: boolean;
  withReused: boolean;
  withReddit: boolean;
}
