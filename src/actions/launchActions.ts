import { createAsyncAction } from "typesafe-actions";
import { ILaunchResponse } from "../types/launchTypes";

export const loadLaunchAsync = createAsyncAction(
  "FETCH_LAUNCH_REQUEST",
  "FETCH_LAUNCH_SUCCESS",
  "FETCH_LAUNCH_FAILURE"
)<undefined, ILaunchResponse, undefined>();
