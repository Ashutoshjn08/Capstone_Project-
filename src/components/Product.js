import React, { Component } from "react";
import '../css/product.css'
import * as productActions from '../actions/productActions'

export default class Product extends Component {
  constructor(props){
    super(props);
    this.detailLink = `/product/${this.props.id}`
  }

  deleteProduct = (id) => {
   productActions.deleteProduct(id);
  }

  onClickHandle = () => {
    this.props.history.push( this.detailLink, {
      id : this.props.id,
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      manufacturer: this.props.manufacturer,
      category: this.props.category,
      image: this.props.image
    })
  }  

  render() {
    // console.log("Product Props", this.props);
    // debugger;
    let smallTitel =
      this.props.title.length < 40
        ? this.props.title
        : this.props.title.slice(0, 40) + "...";

     
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col-sm-5">
            
              <a href = {this.detailLink} style = {{cursor:"pointer"}} className="prod-items" onClick = {this.onClickHandle}><u>{smallTitel}</u></a>
                     
            </div>
          <div className="col-sm-1"><span className="prod-items">{this.props.price}  Rs.</span></div>
          <div className="col-sm-1"><span className="prod-items">{this.props.quantity}  items</span></div>
          <div className="col-sm-1"><span className="prod-items">{this.props.manufacturer}</span></div>
          <div className="col my-sidebar">
          <a style ={{marginLeft:"5px"}} href="#" className="btn btn-primary"><span>Update</span></a>
          <a id = {this.props.id} onClick = {event => {this.deleteProduct(event.currentTarget.id)}} style ={{marginLeft:"5px"}} href="#" className="btn btn-primary"><span>Delete</span></a>
              </div>
        </div>
      </div>
    );
  }
}
