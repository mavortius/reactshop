import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";
import { IProduct, products } from "./ProductsData";

interface State {
  products: IProduct[];
  search: string;
}

class ProductsPage extends React.Component<RouteComponentProps, State> {

  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    this.state = {
      products: [],
      search: ""
    };
  }

  public static getDerivedStateFromProps(props: RouteComponentProps, state: State) {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get("search") || "";
    return {
      products: state.products,
      search
    }
  }

  componentDidMount(): void {
    this.setState({ products });
  }

  render() {
    return (
      <div className="page-container">
        <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
        <ul className="product-list">
          {this.state.products.map(product => {
            if (!this.state.search ||
              (this.state.search && product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)) {
              return (
                <li key={product.id} className="product-list-item">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
