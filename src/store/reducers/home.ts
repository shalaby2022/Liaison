import { ActionTypes } from "../actionTypes";
import { HomeAction, IProduct } from "../actions/home";

export interface IhomeState {
  loading_posts: boolean;
  products: IProduct[];
  error: string;
}

const initialState: IhomeState = {
  loading_posts: false,
  products: [],
  error: "",
};

export const homeReducer = (
  state: IhomeState = initialState,
  action: HomeAction
): IhomeState => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING_START:
      return { ...state, loading_posts: true };
    case ActionTypes.LIST_FETCHED:
      return { ...state, loading_posts: false, products: action.payload };
    case ActionTypes.LIST_LOADING_ERROR:
      return { ...state, loading_posts: false, error: action.payload };
    default:
      return state;
  }
};
