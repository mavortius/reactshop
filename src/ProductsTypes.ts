import { IProduct } from "./ProductsData";

export enum ProductsActionTypes {
  GET_ALL = "PRODUCTS/GETALL",
  GET_SINGLE = "PRODUCTS/GETSINGLE",
  LOADING = "PRODUCTS/LOADING"
}

export interface IProductsGetAllAction {
  type: ProductsActionTypes.GET_ALL;
  products: IProduct[];
}

export interface IProductsGetSingleAction {
  type: ProductsActionTypes.GET_SINGLE;
  product: IProduct;
}

export interface IProductsLoadingAction {
  type: ProductsActionTypes.LOADING;
}

export type ProductsActions = | IProductsGetAllAction | IProductsGetSingleAction | IProductsLoadingAction;

export interface IProductsState {
  readonly currentProduct: IProduct | null;
  readonly products: IProduct[];
  readonly productsLoading: boolean;
}
