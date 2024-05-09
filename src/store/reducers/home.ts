import { ActionTypes } from "../actionTypes";
import { HomeAction, IProduct } from "../actions/home";

export interface IhomeState {
  isLoading: boolean;
  products: IProduct[];
  error: string;
}

const initialState: IhomeState = {
  isLoading: false,
  products: [],
  error: "",
};

export const homeReducer = (
  state: IhomeState = initialState,
  action: HomeAction
): IhomeState => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING_START:
      return { ...state, isLoading: true };
    case ActionTypes.LIST_FETCHED:
      return { ...state, isLoading: false, products: action.payload };
    case ActionTypes.LIST_LOADING_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
