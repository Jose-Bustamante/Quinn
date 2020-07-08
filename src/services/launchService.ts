import axios, { AxiosResponse } from "axios";
import { IRootState } from "../types/launchTypes";
import { API_URL } from "../constants";
// import processParams from "./utils";

export const loadLaunches = (params: string): Promise<IRootState[]> =>
  axios
    .get(`${API_URL}/launch/${params}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res: AxiosResponse) => res.data);
