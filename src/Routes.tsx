import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import ContactUsPage from "./ContactUsPage";

const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes}/>
    </Router>
  )
};

const Routes = (props: RouteComponentProps) => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header/>
      <TransitionGroup>
        <CSSTransition key={props.location.key} timeout={500} classNames="animate">
          <Switch>
            <Redirect exact={true} from="/" to="/products"/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/products" exact={true} component={ProductsPage}/>
            <Route path="/products/:id" component={ProductPage}/>
            <Route path="/contactus" component={ContactUsPage}/>
            <Route path="/admin">
              {loggedIn ? (
                <Suspense fallback={<div className="page-container">Loading...</div>}>
                  <AdminPage/>
                </Suspense>
              ) : (
                <Redirect to="/login"/>
              )}
            </Route>
            <Route component={NotFoundPage}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};

export default RoutesWrap;
