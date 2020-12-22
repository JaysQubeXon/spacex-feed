import { useSelector } from "react-redux";
import { AppStore } from "../store";

export function useControls() {
  const controls = useSelector((state: AppStore) => ({
    withLandSuccess: state.controls.withLandSuccess,
    withReused: state.controls.withReused,
    withReddit: state.controls.withReddit,
  }));

  return controls;
}
