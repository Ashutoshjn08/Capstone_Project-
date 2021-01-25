import React, { Component } from "react";
import "../css/product.css";
import * as productActions from "../actions/productActions";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.detailLink = `/product/${this.props.id}`;
  }


  inputChecked = (checked) => {
    if(checked){
      this.props.inputCheckedPush(this.props.id, this.props.title)
    }else{
      this.props.inputCheckedPop(this.props.id, this.props.title)
    }
  }


  updateProduct = (id) => {
    let login = localStorage.getItem("login");
    if (login) {
      this.props.history.push("/updateproduct", {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
        description: this.props.description,
        manufacturer: this.props.manufacturer,
        category: this.props.category,
        image: this.props.image,
        quantity: this.props.quantity,
      });
    } else {
      let flag = window.confirm("Please log-in to update");
      if (flag) {
        this.props.history.push("/signin");
      } else {
        this.props.history.push("/products");
      }
    }
  };

  ///onClick

  ViewProduct = (id) => {
    this.props.history.push(this.detailLink, {
      id: this.props.id,
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      manufacturer: this.props.manufacturer,
      category: this.props.category,
      image: this.props.image,
    });
    this.props.incViewCountProp(id);
  }

  onClickHandle = (e) => {
    let login = localStorage.getItem('login')
    if(login){
           this.ViewProduct(this.props.id)
    }else{
      let flag = window.confirm('Please login to view the product');
      if(flag){
        this.props.history.push('/signin')
      }else{
        this.props.history.push('/products')
      }
    }
    
  };

  render() {
    let smallTitel =
      this.props.title.length < 35
        ? this.props.title
        : this.props.title.slice(0, 35) + "...";

     
    return (
      <div className="container">
        
        
        <div className="row">
          <div className="col-sm-4 ">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
              onChange = {e => this.inputChecked(e.target.checked)}
              toJustRender = {this.props.uncheck}
            />
            <a
              style={{ cursor: "pointer" }}
              className="prod-items"
              onClick={() => this.onClickHandle()}
            >
              <u>{smallTitel}</u>
            </a>
          </div>
          <div className={this.props.prCheck ? "col " : "hide-item-li"}>
            <span className="prod-items">{this.props.price} Rs.</span>
          </div>
          <div className={this.props.quCheck ? "col " : "hide-item-li"}>
            <span className="prod-items">{this.props.quantity} items</span>
          </div>
          <div className={this.props.caCheck ? "col " : "hide-item-li"}>
            <span className="prod-items">{this.props.category}</span>
          </div>
          <div className={this.props.brCheck ? "col " : "hide-item-li"}>
            <span className="prod-items">{this.props.manufacturer}</span>
          </div>
          <div className="col col-update">
            <a
              id={this.props.id}
              onClick={(event) => {
                this.updateProduct(event.currentTarget.id);
              }}
              style={{ marginLeft: "5px", textAlign: "center", width:"100px" }}
              className="btn btn-primary"
            >
              <span>Update</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
