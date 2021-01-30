import React, { Component } from "react";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.localStorageObj = this.props.location.state;
    this.localStorageStr  = JSON.parse(localStorage.getItem("products"));
    
    console.log("localStorage", this.localStorageObj)
  }

  render() {
    if (!this.localStorageObj) {
      let arr = this.localStorageStr.filter(
        (product) => product.id == this.props.match.params.id
      );
      this.localStorageObj = arr[0];
    }
    return (
      <div className="home-container">
        <div className="card">
          <div className="pro-details-main">
            <div className="img-shadow">
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  margin: "auto",
                  padding: "20px",
                }}
                src={this.localStorageObj.image}
                alt="Card image cap"
              />
            </div>

            <div className="card-body pro-details">
              <h4 className="card-title">{this.localStorageObj.title}</h4>
              <p className="card-text">{this.localStorageObj.description}</p>
              <p>
                <b>Price: </b>Rs. {this.localStorageObj.price}
              </p>
              <p>
                <b>Brand: </b>
                {this.localStorageObj.manufacturer}
              </p>
              <p>
                <b>Catagory: </b>
                {this.localStorageObj.category}
              </p>
              <a
                href="/products"
                className="btn btn-primary"
                style={{
                  width: "auto",
                  margin: 0
                }}
              >
                View Other Products
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
