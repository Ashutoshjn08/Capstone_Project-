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
import logo from "./logo.png";
import ProductDetails from "./components/ProductDetails";
import AddProductPage from "./components/AddProductPage";
import UpdageProductPage from "./components/UpdageProductPage";
import TopProductPage from "./components/TopProductPage";

store.dispatch(getAllProducts());

class Links extends Component {
  onChangeHandle = (val) => {
    this.props.onChangeHandleProp(val);
  };

  render() {
    return (
      <nav  className="navbar navbar-expand-sm bg-dark navbar-dark nav-custom">
        <span>
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Product Inventory"></img>
          </a>
        </span>
        <ul className="navbar-nav">
          <li className="right-align-home-product-nav nav-item">
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li className="right-align-home-product-nav nav-item">
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
          <li className="right-align-home-product-nav nav-item">
            <NavLink to="/topproducts">TOP PRODUCTS</NavLink>
          </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">
          <li className="li-signin-up">
            <a href="#">
              <span className="glyphicon glyphicon-user"></span> Sign Up{" "}
            </a>
          </li>
          <li className="li-signin-up">
            <a href="#">
              <span className ="glyphicon glyphicon-log-in"></span> Login{" "}
            </a>
          </li>
          <li>
            <input
              onChange={(e) => {
                this.onChangeHandle(e.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default class App extends Component {
  state = {
    searchValue: "",
  };

  onChangeHandle = (val) => {
    this.setState({ searchValue: val.toLowerCase() });
    console.log(this.state.searchValue);
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Links onChangeHandleProp={this.onChangeHandle} />

          <Switch>
            <>
            <div className="content-div-list">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path = "/topproducts" render = {
                (props) => {
                  return(
                    <div id="top-product">
                        <TopProductPage {...props}/>
                      </div>
                )}
              }/>
              <Route
                path="/products"
                render={(props) => {
                  return (
                   
                        <AllProductsPage
                          {...props}
                          searchValue={this.state.searchValue}
                        />
                     
                  );
                }}
              />
              <Route
                path="/product/:id"
                render={(props) => <ProductDetails {...props} />}
              />
              <Route
                path="/addproduct"
                render={(props) => <AddProductPage {...props} />}
              />
              <Route
                path="/updateproduct"
                render={(props) => <UpdageProductPage {...props} />}
              />
            </div>
            </>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
