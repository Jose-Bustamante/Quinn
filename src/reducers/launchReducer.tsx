import { ActionType, getType } from "typesafe-actions";
import { loadLaunchAsync } from "../actions/launchActions";
import { IRootState } from "../types/launchTypes";

type Action = ActionType<typeof loadLaunchAsync>;

const initialState: IRootState = {
  isLoading: false,
  launches: [],
};

export const launchReducer = (
  state = initialState,
  action: Action
): IRootState => {
  switch (action.type) {
    case getType(loadLaunchAsync.success):
      return { ...state, launches: action.payload.launches };

    default:
      return state;
  }
};
