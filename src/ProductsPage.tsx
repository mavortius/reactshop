import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import "url-search-params-polyfill";
import { IProduct } from "./ProductsData";
import { getProducts } from "./ProductsActions";
import { IApplicationState } from "./Store";
import ProductsList from "./ProductsList";

interface IProps extends RouteComponentProps {
  getProducts: typeof getProducts;
  loading: boolean;
  products: IProduct[];
}

class ProductsPage extends React.Component<IProps> {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get("search") || "";

    return (
      <div className="page-container">
        <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
        <ProductsList search={search} products={this.props.products} loading={this.props.loading}/>
      </div>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => ({
  loading: store.products.productsLoading,
  products: store.products.products
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
