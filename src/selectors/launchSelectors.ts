import { IRootState, IStoreState } from "../types/launchTypes";
import { createSelector } from "reselect";

export const domainSelector = (state: IStoreState): IRootState => {
  return state.launchReducer;
};

export const selectLaunches = () =>
  createSelector(domainSelector, (subset) => {
    return subset.launches;
  });
