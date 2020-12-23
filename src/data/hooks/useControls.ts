import { useSelector } from "react-redux";
import { AppStore } from "../store";

const controlsContext = (state: AppStore) => state.controls;

export function useControls() {
  const controls = useSelector(controlsContext);

  return {
    isRefreshing: controls.isLoading,
    withLandSuccess: controls.withLandSuccess,
    withReused: controls.withReused,
    withReddit: controls.withReddit,
  };
}
