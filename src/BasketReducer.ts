import { BasketActions, BasketActionTypes, IBasketState } from "./BasketTypes";
import { Reducer } from "redux";

const initialBasketState: IBasketState = {
  products: []
};

export const basketReducer: Reducer<IBasketState, BasketActions> = (state = initialBasketState, action) => {
  switch (action.type) {
    case BasketActionTypes.ADD: {
      return {
        ...state,
        products: state.products.concat(action.product)
      };
    }
    default:
      return state || initialBasketState;
  }
};
