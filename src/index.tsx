import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Store } from "redux";
import { Provider } from "react-redux";
import RoutesWrap from "./Routes";
import configureStore, { IApplicationState } from "./Store";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <RoutesWrap/>
    </Provider>
  );
};

const store = configureStore();
ReactDOM.render(<Root store={store}/>, document.getElementById("root") as HTMLElement);

