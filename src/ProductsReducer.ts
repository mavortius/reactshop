import { IProductsState, ProductsActions, ProductsActionTypes } from "./ProductsTypes";
import { Reducer } from "redux";

const initialProductState: IProductsState = {
  currentProduct: null,
  products: [],
  productsLoading: false
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (
  state = initialProductState, action
) => {
  switch (action.type) {
    case ProductsActionTypes.LOADING: {
      return {
        ...state,
        productsLoading: true
      };
    }
    case ProductsActionTypes.GET_ALL: {
      return {
        ...state,
        products: action.products,
        productsLoading: false
      };
    }
    case ProductsActionTypes.GET_SINGLE: {
      return {
        ...state,
        currentProduct: action.product,
        productsLoading: false
      };
    }
    default:
      return state || initialProductState;
  }
};


