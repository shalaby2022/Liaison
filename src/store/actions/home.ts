import { Dispatch } from "redux";
import { ActionTypes } from "../actionTypes";
import { fetchProducts } from "../../services/home";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ListFetchingStart {
  type: ActionTypes.LIST_LOADING_START;
}

interface ListFetched {
  type: ActionTypes.LIST_FETCHED;
  payload: IProduct[];
}

interface ListFetchingEnd {
  type: ActionTypes.LIST_LOADING_ERROR;
  payload: string;
}

export type HomeAction = ListFetchingStart | ListFetched | ListFetchingEnd;

export type categoryArgument = string | null;

export const getHomeList = (category: categoryArgument) => {
  return async (dispatch: Dispatch<HomeAction>) => {
    try {
      dispatch({ type: ActionTypes.LIST_LOADING_START });
      const postsResponse = await fetchProducts(category);

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
