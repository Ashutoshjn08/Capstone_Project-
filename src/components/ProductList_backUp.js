import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedInputs: [],
      title: [],
      enableButton: false,
      toUncheck: true,
    };
  }

  //Common function after checking value from search bar

  checkedInputPushHandler = (id, title) => {
    this.setState(
      {
        checkedInputs: [...this.state.checkedInputs, id],
        title: [...this.state.title, title],
        enableButton: true,
      },
      () => {
        console.log(this.state.checkedInputs, this.state.title);
      }
    );
  };

  checkedInputPopHandler = (id, title) => {
    this.setState(
      {
        checkedInputs: this.state.checkedInputs.filter((el) => el !== id),
        title: this.state.title.filter((el) => el !== title),
      },
      () => {
        console.log(this.state.checkedInputs, this.state.title);
        if (this.state.checkedInputs.length == 0) {
          this.setState({ enableButton: false });
        }
      }
    );
  };

  deleteProduct = (id) => {
    this.props.deleteProductProp(id);
    // let login = localStorage.getItem("login");
    // if (login) {
    //   var flag = window.confirm("Are you sure to remove this product?");
    //   if (flag) {
    //     this.props.deleteProductProp(id);
    //   }
    // } else {
    //   let flag = window.confirm("Please log-in to delete");
    //   if (flag) {
    //     this.props.history.push("/signin");
    //   } else {
    //     this.props.history.push("/products");
    //   }
    // }
  };

  checkLogin = () => {
    let login = localStorage.getItem("login");
    if (login) {
      this.props.history.push("/addproduct");
    } else {
      let flag = window.confirm("Please log-in to update");
      if (flag) {
        this.props.history.push("/signin");
      } else {
        this.props.history.push("/products");
      }
    }
  };
  getProductsAfterSearch = (product) => {
    let classString;
    const remainder = product.id < 7 ? product.id : product.id % 7;
    switch (remainder) {
      case 0:
        classString = "primary";
        break;
      case 1:
        classString = "secondary";
        break;
      case 2:
        classString = "success";
        break;
      case 3:
        classString = "danger";
        break;
      case 4:
        classString = "warning";
        break;
      case 5:
        classString = "info";
        break;
      case 6:
        classString = "light";
        break;
      default:
        classString = "dark";
    }
    return classString;
  };

  render() {
    console.log(this.props, "productlist");
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(this.props.products));

    const productList = this.props.products.map((product, ind) => {
      if (
        this.props.searchValue &&
        (product.category.toLowerCase().includes(this.props.searchValue) ||
          product.title.toLowerCase().includes(this.props.searchValue) ||
          product.manufacturer.toLowerCase().includes(this.props.searchValue))
      ) {
        return (
          <li
            key={product.id}
            className={`list-group-item list-group-item-${this.getProductsAfterSearch(
              product
            )}`}
          >
            <Product
              inputCheckedPop={this.checkedInputPopHandler}
              inputCheckedPush={this.checkedInputPushHandler}
              {...product}
              {...this.props}
              toUncheck={this.state.toUncheck}
              ind={ind}
            />
          </li>
        );
      } else if (this.props.searchValue == "") {
        return (
          <li
            key={product.id}
            className={`list-group-item list-group-item-${this.getProductsAfterSearch(
              product
            )}`}
          >
            <Product
              inputCheckedPop={this.checkedInputPopHandler}
              inputCheckedPush={this.checkedInputPushHandler}
              {...product}
              {...this.props}
              toUncheck={this.state.toUncheck}
              ind={ind}
            />
          </li>
        );
      }
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="list-head-names col-sm-4">
              <span id="head-names" className="prod-items">
                Title
              </span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id="head-names" className="prod-items">
                Price
              </span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id="head-names" className="prod-items">
                Quantity
              </span>
            </div>
            <div className="list-head-names col-sm-2">
              <span id="head-names" className="prod-items">
                Category
              </span>
            </div>
            <div className="list-head-names col-sm-1">
              <span id="head-names" className="prod-items">
                Brand
              </span>
            </div>
            <div className="list-head-names col-sm-3 last-col">
              <a
                onClick={this.checkLogin}
                style={{ marginLeft: "5px" }}
                className="btn btn-primary"
              >
                <span>Add</span>
              </a>
              <a
                id={this.props.id}
                onClick={async (event) => {
                  if (this.state.checkedInputs.length == 0) {
                    alert("Please select at least one product to delete!");
                  } else {
                    let index = 0;
                    let login = localStorage.getItem("login");
                    if (login) {
                      for (const item of this.state.checkedInputs) {
                        var flag = await window.confirm(
                          `Are you sure to remove ${this.state.title[index]}?`
                        );
                        if (flag) {
                          await this.deleteProduct(item);
                          index++;
                        } else {
                          await this.setState({
                            toUncheck: !this.state.toUncheck,
                          });
                        }
                      }

                      // this.state.checkedInputs.forEach((id,ind) => {
                      //   var flag = window.confirm(`Are you sure to remove ${this.state.title[ind]}?`);
                      //   if (flag) {
                      //     this.deleteProduct(id);
                      //   }
                      // });
                    } else {
                      let flag = window.confirm("Please log-in to delete");
                      if (flag) {
                        this.props.history.push("/signin");
                      } else {
                        this.props.history.push("/products");
                      }
                    }

                    this.setState({ checkedInputs: [], title: [] });
                  }
                }}
                style={{ marginLeft: "5px" }}
                href="#"
                className={
                  this.state.enableButton
                    ? "btn btn-primary"
                    : "btn btn-primary disabled"
                }
              >
                <span>Delete</span>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <ul className="list-group">{productList}</ul>
        </div>
      </div>
    );
  }
}
