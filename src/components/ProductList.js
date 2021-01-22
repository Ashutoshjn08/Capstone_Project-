import React, { Component } from "react";
import Product from "./Product";
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
// import {Modal, Button} from 'react-bootstrap';

Modal.setAppElement("#root");

const TitleList = (props) => {
  return (
    <div className="container">
      <div className="row bottom-buffer">
        <div className="col-sm-4 ">
          <span id="head-names" className="prod-items">
            <u>
              <b>Title</b>
            </u>
          </span>
        </div>
        <div className={props.priceSelect ? "col" : "hide-item-li"}>
          <span id="head-names" className="prod-items">
            <u>
              <b>Price</b>
            </u>
          </span>
        </div>
        <div className={props.quantitySelect ? "col " : "hide-item-li"}>
          <span id="head-names" className="prod-items">
            <u>
              <b>Quantity</b>
            </u>
          </span>
        </div>
        <div className={props.categorySelect ? "col " : "hide-item-li"}>
          <span id="head-names" className="prod-items">
            <u>
              <b>Category</b>
            </u>
          </span>
        </div>
        <div className={props.brandSelect ? "col " : "hide-item-li"}>
          <span id="head-names" className="prod-items">
            <u>
              <b>Brand</b>
            </u>
          </span>
        </div>
        <div className="col">
          <span id="head-names" className="prod-items">
            <u>
              <b>Update Product</b>
            </u>
          </span>
        </div>
      </div>
    </div>
  );
};

/////////////////////Product List/////////////////////////

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedInputs: [],
      title: [],
      enableButton: false,
      toUncheck: 0,
      isModalOpen: false,
      priceSelect: true,
      quantitySelect: true,
      categorySelect: true,
      brandSelect: true,
    };
  }

  fieldSelectStatus = (e) => {
    if (e.target.name === "price") {
      this.setState({ priceSelect: !this.state.priceSelect });
    } else if (e.target.name === "quantity") {
      this.setState({ quantitySelect: !this.state.quantitySelect });
    } else if (e.target.name === "category") {
      this.setState({ categorySelect: !this.state.categorySelect });
    } else {
      this.setState({ brandSelect: !this.state.brandSelect });
    }
    console.log("stattt", this.state, e);
  };
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
          <div key={product.id}>
            {ind === 0 ? <TitleList /> : null}
            <li
              className={`list-group-item list-group-item-${this.getProductsAfterSearch(
                product
              )}`}
            >
              <Product
                inputCheckedPop={this.checkedInputPopHandler}
                inputCheckedPush={this.checkedInputPushHandler}
                {...product}
                {...this.props}
                uncheck={this.state.toUncheck}
                prCheck={this.state.priceSelect}
                quCheck={this.state.quantitySelect}
                caCheck={this.state.categorySelect}
                brCheck={this.state.brandSelect}
              />
            </li>
          </div>
        );
      } else if (this.props.searchValue == "") {
        return (
          <div key={product.id}>
            {ind === 0 ? <TitleList {...this.state} /> : null}
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
                uncheck={this.state.toUncheck}
                prCheck={this.state.priceSelect}
                quCheck={this.state.quantitySelect}
                caCheck={this.state.categorySelect}
                brCheck={this.state.brandSelect}
              />
            </li>
          </div>
        );
      }
    });
    return (
      <>
        {/************Modal******************* */}
        <div className="ui container modal-div">
          <Modal
            style={{
              content: {
                backgroundColor: "transparent",
                border: "none",
              },
            }}
            isOpen={this.state.isModalOpen}
          >
            {/* Card */}
            <div className="card text-center">
              <div className="card-header">
                <h4>Select the fields</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <div
                    style={{
                      color: "rgb(31, 31, 31)",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    <div className="custum-fields">
                      <input
                        
                        onChange={(e) => this.fieldSelectStatus(e)}
                        checked={this.state.priceSelect}
                        type="checkbox"
                        name="price"
                      />{" "}
                      <span
                        style={{
                          color: "rgb(31, 31, 31)",
                          marginRight: "30px",
                        }}
                      >
                        {" "}
                        Price
                      </span>
                    </div>
                    <div className="custum-fields">
                      <input
                        
                        onChange={(e) => this.fieldSelectStatus(e)}
                        checked={this.state.quantitySelect}
                        type="checkbox"
                        name="quantity"
                      />
                      <span
                        style={{
                          color: "rgb(31, 31, 31)",
                          marginRight: "25px",
                        }}
                      >
                        {" "}
                        Quantity
                      </span>
                    </div>

                    <div className="custum-fields">
                      <input
                        
                        onChange={(e) => this.fieldSelectStatus(e)}
                        checked={this.state.categorySelect}
                        type="checkbox"
                        name="category"
                      />
                      <span
                        style={{
                          color: "rgb(31, 31, 31)",
                          marginRight: "25px",
                        }}
                      >
                        {" "}
                        Category
                      </span>
                    </div>

                    <div className="custum-fields">
                      <input
                        
                        onChange={(e) => this.fieldSelectStatus(e)}
                        checked={this.state.brandSelect}
                        type="checkbox"
                        name="brand"
                      />
                      <span
                        style={{
                          color: "rgb(31, 31, 31)",
                          marginRight: "25px",
                        }}
                      >
                        {" "}
                        Brand
                      </span>
                    </div>
                  </div>
                </p>
                <a
                  href="#"
                  onClick={() => this.setState({ isModalOpen: false })}
                  className="btn btn-primary"
                >
                  OK
                </a>
              </div>
              <div className="cancel-icon">
                <a
                  href="#"
                  onClick={() => this.setState({ isModalOpen: false })}
                >
                  <FaRegWindowClose style={{ color: "rgb(34, 34, 34)" }} />
                </a>
              </div>
            </div>
          </Modal>
        </div>

        {/* *********Buttons***************** */}
        <div className="container">
          <div className="div-btn-add">
            <div>
              <a
                onClick={() => this.setState({ isModalOpen: true })}
                style={{ width: "auto" }}
                className="btn btn-primary"
              >
                <span>Customize</span>
              </a>
            </div>
            <div>
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
                          this.setState({ toUncheck: this.state.toUncheck++ });
                        } else {
                          this.setState({ toUncheck: this.state.toUncheck++ });
                        }
                      }
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
        {/* ***********List********** */}
        <div style={{ width: "100%" }}>
          <ul className="list-group">{productList}</ul>
        </div>
      </>
    );
  }
}
