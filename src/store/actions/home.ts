import { Dispatch } from "redux";
import { ActionTypes } from "../actionTypes";
import { fetchPost } from "../../services/home";

export interface IPOST {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface ListFetchingStart {
  type: ActionTypes.LIST_LOADING_START;
}

interface ListFetched {
  type: ActionTypes.LIST_FETCHED;
  payload: IPOST[];
}

interface ListFetchingEnd {
  type: ActionTypes.LIST_LOADING_ERROR;
  payload: string;
}

export type HomeAction = ListFetchingStart | ListFetched | ListFetchingEnd;

export const getHomeList = () => {
  return async (dispatch: Dispatch<HomeAction>) => {
    try {
      dispatch({ type: ActionTypes.LIST_LOADING_START });
      const postsResponse = await fetchPost();

      dispatch({
        type: ActionTypes.LIST_FETCHED,
        payload: postsResponse?.data,
      });
    } catch (er) {
      if (er instanceof Error) {
        dispatch({ type: ActionTypes.LIST_LOADING_ERROR, payload: er.message });
      }
    }
  };
};
