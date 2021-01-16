import React, { Component } from "react";
import '../css/product.css'
import * as productActions from '../actions/productActions'

export default class Product extends Component {
  constructor(props){
    super(props);
    this.detailLink = `/product/${this.props.id}`
  }

  deleteProduct = (id) => {
    var flag = window.confirm("Are you sure to remove this product?");
    if (flag) {
      this.props.deleteProductProp(id);
    }   
  }

  updateProduct = (id) =>{
    console.log("id", id, "props", this.props);
    this.props.history.push( '/updateproduct', {
      id : this.props.id,
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      manufacturer: this.props.manufacturer,
      category: this.props.category,
      image: this.props.image,
      quantity : this.props.quantity
    });
  }
  
  onClickHandle = (id) => {
    
      this.props.incViewCountProp(id);
      this.props.history.push( this.detailLink, {
      id : this.props.id,
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      manufacturer: this.props.manufacturer,
      category: this.props.category,
      image: this.props.image
    });
    debugger;
  }  

  render() {
    let smallTitel =
      this.props.title.length < 35
        ? this.props.title
        : this.props.title.slice(0, 35) + "...";

     
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
              <a href = {this.detailLink} style = {{cursor:"pointer"}} className="prod-items" onClick = {()=>this.onClickHandle(this.props.id)}><u>{smallTitel}</u></a>
                     
            </div>
          <div className="col-sm-1"><span className="prod-items">{this.props.price}  Rs.</span></div>
          <div className="col-sm-1"><span className="prod-items">{this.props.quantity}  items</span></div>
          <div className="col-sm-2"><span className="prod-items">{this.props.category}</span></div>
          <div className="col-sm-1"><span className="prod-items">{this.props.manufacturer}</span></div>
          <div className="col-sm-3">
          <a id = {this.props.id} onClick = {event => {this.updateProduct(event.currentTarget.id)}} style ={{marginLeft:"5px"}} href="/updateproduct" className="btn btn-primary"><span>Update</span></a>
          <a id = {this.props.id} onClick = {event => {this.deleteProduct(event.currentTarget.id)}} style ={{marginLeft:"5px"}} href="#" className="btn btn-primary"><span>Delete</span></a>
              </div>
        </div>
      </div>
    );
  }
}
