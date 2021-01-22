//json-server -p 3001 --watch db.json
import React, { Component, useEffect, useState } from "react";
import AllProductsPage from "./components/AllProductsPage";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import { getAllProducts } from "./actions/productActions";
import { getAllUsers } from "./actions/userActions";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./css/app.css";
import logo from "./logo.png";
import ProductDetails from "./components/ProductDetails";
import AddProductPage from "./components/AddProductPage";
import UpdageProductPage from "./components/UpdageProductPage";
import TopProductPage from "./components/TopProductPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

store.dispatch(getAllProducts());
store.dispatch(getAllUsers());

// show:"li-signin-up show-item-li", hide :"li-signin-up hide-item-li"
function Links(props) {
  let hide = "li-signin-up hide-item-li";
  let d = new Date();
  const [liLogin, setLilogin] = useState(true);
  const [liLogout, setlilogout] = useState(true);
  const [int, setInt] = useState(d.getDate()+""+d.getTime());

  const onChangeHandleSearch = (val) => {
    props.onChangeHandleProp(val);
  };

  useEffect(() => {
    let checkLoggedIn = localStorage.getItem("login");
    if (checkLoggedIn) {
      setlilogout(true);
      setLilogin(false);
    } else {
      setlilogout(false);
      setLilogin(true);
    }
  }, [int, props.loggedInStatus]);

  const removeLogin = () => {
    localStorage.removeItem("login");
    setInt(d.getDate()+""+d.getTime());
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-custom">
      <div className="main-nav">
        <div className="left-nav-div">
          <div className="img-nav">
            <span>
              <a className="navbar-brand" href="/">
                <img
                  style={{ paddingLeft: "15px", display: "inline-block" }}
                  src={logo}
                  alt="Product Inventory"
                ></img>
              </a>
            </span>
          </div>
          <div className="left-nav">
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
          </div>
        </div>
        <div className="right-nav">
          <ul
            style={{ float: "right !important" }}
            className="nav navbar-nav ml-auto "
          >
            <li className={liLogin ? "li-signin-up" : `li-signin-up ${hide}`}>
              <NavLink to="/signin">
                <span className="glyphicon glyphicon-user"></span> Login{" "}
              </NavLink>
            </li>
            <li className={liLogin ? "li-signin-up" : `li-signin-up ${hide}`}>
              <NavLink to="/signup">
                <span className="glyphicon glyphicon-log-in"></span> Sign up{" "}
              </NavLink>
            </li>
            <li>
              <input
                onChange={(e) => {
                  onChangeHandleSearch(e.target.value);
                }}
                className="form-control me-2"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
              />
            </li>
            <li onClick={removeLogin} className={liLogout ? "li-signin-up" : `li-signin-up ${hide}`}>
              <a href="#">
                <div className="glyphicon glyphicon-log-in log-out">
                  <FaSignOutAlt />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

///////////////*******App************///

export default class App extends Component {
  state = {
    searchValue: "",
    loggedIn: false,
  };

  toggelLoggeinStatus = (val) => {
    this.setState({ loggedIn: val });
  };

  onChangeHandle = (val) => {
    this.setState({ searchValue: val.toLowerCase() });
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Links
            onChangeHandleProp={this.onChangeHandle}
            loggedInStatus={new Date().getDate() +""+ new Date().getTime()}
            removeLogin={this.removeLogin}
          />
          <Switch>
            <>
              <div className="ui container">
                <Route
                  path="/signin"
                  render={(props) => {
                    return <SignInPage {...props} />;
                  }}
                />
              </div>
              <div className="ui container">
                <Route
                  path="/signup"
                  render={(props) => {
                    return <SignUpPage {...props} />;
                  }}
                />
              </div>
              <div className="content-div-list">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route
                  path="/topproducts"
                  render={(props) => {
                    return (
                      <div id="top-product">
                        <TopProductPage {...props} />
                      </div>
                    );
                  }}
                />
                <Route
                  path="/products"
                  render={(props) => {
                    return (
                      <AllProductsPage
                        {...props}
                        searchValue={this.state.searchValue}
                        loggedIn={this.toggelLoggeinStatus}
                      />
                    );
                  }}
                />
                <Route
                  path="/product/:id"
                  render={(props) => {
                    return <ProductDetails {...props} />;
                  }}
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
