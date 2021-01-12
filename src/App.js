//json-server -p 3001 --watch db.json
import React, { Component } from "react";
import AllProductsPage from "./components/AllProductsPage";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import { getAllProducts } from "./actions/productActions";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./css/app.css";
import logo from './logo.png'
import ProductDetails from "./components/ProductDetails";
import AddProductPage from "./components/AddProductPage";

store.dispatch(getAllProducts());

class Links extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <span><a className="navbar-brand" href="/">
          <img src={logo} alt ="Product Inventory"></img>
        </a></span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products">
              PRODUCTS
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="ui container">
          <Links />
          </div>
          <div style = {{marginTop:"64px"}} className="ui container">
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route
                path="/products"
                render={(props) => <AllProductsPage {...props} />}
              />
              <Route path = "/product/:id" render = {props => <ProductDetails {...props}/>}/>
              <Route path = "/addproduct" render = {props => <AddProductPage {...props}/>}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
