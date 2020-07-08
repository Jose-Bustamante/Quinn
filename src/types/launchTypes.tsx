// interfaces
export interface ILaunch {
  offset: number;
  count: number;
  location: object;
  id: number;
}

export interface IRootState {
  count?: number;
  isLoading?: boolean;
  launches: ILaunch[];
}

export interface ILaunchResponse {
  count: number;
  launches: ILaunch[];
}

export interface IStoreState {
  launchReducer: IRootState;
}
