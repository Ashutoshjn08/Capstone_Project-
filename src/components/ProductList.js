import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const productList = this.props.products.map((product) => {
      let classString;
      const remainder = product.id < 7 ? product.id : product.id % 7;
      //   debugger;
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
      return (
        <li
          key={product.id}
          className={`list-group-item list-group-item-${classString}`}
        >
          <Product {...product} {...this.props} />
        </li>
      );
    });
    return (
      <div>
        <div style={{height:"60px" }}>
          <a
            href="/addproduct"
            style={{
              width: "150px",
              margin: "10Px 54px 10px 0",
              float: "right",
            }}
            className="btn btn-primary"
          >
            <span>Add Product</span>
          </a>
          <br />
        </div>

        <div style={{width:"100%" }}>
          <ul className="list-group">{productList}</ul>
        </div>
      </div>
    );
  }
}
