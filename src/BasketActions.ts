import { IProduct } from "./ProductsData";
import { BasketActionTypes, IBasketAdd } from "./BasketTypes";

export const addToBasket = (product: IProduct): IBasketAdd => ({
  product,
  type: BasketActionTypes.ADD
});


