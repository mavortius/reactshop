import * as React from "react";
import { Prompt, RouteComponentProps } from "react-router-dom";
import { getProduct, IProduct } from "./ProductsData";
import Product from "./Product";

type Props = RouteComponentProps<{ id: string }>;

interface State {
  product?: IProduct;
  added: boolean;
  loading: boolean;
}

class ProductPage extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      added: false,
      loading: true
    };
  }

  private handleAddClick = () => this.setState({ added: true });

  private navAwayMessage = () => "Are you sure you want leave without buying this product?";

  async componentDidMount() {
    if (this.props.match.params.id) {
      const id = parseInt(this.props.match.params.id, 10);
      const product = await getProduct(id);

      if (product !== null) {
        this.setState({ product, loading: false });
      }
    }
  }

  render() {
    const product = this.state.product;

    return (
      <div className="page-container">
        <Prompt when={!this.state.added} message={this.navAwayMessage}/>
        {product || this.state.loading ? (
          <Product loading={this.state.loading} product={product} inBasket={this.state.added}
                   onAddToBasket={this.handleAddClick}/>
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }
}

export default ProductPage;
