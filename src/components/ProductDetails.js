import React, { Component } from "react";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.smallStr = this.props.location.state;
  }
  render() {
    console.log(this.props);
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
                src={this.smallStr.image}
                alt="Card image cap"
              />
            </div>

            <div className="card-body pro-details">
              <h4 className="card-title">{this.smallStr.title}</h4>
              <p className="card-text">{this.smallStr.description}</p>
              <p>
                <b>Price: </b>Rs. {this.smallStr.price}
              </p>
              <p>
                <b>Brand: </b>
                {this.smallStr.manufacturer}
              </p>
              <p>
                <b>Catagory: </b>
                {this.smallStr.category}
              </p>
              <a
                href="/products"
                className="btn btn-primary"
                style={{
                  width: "200px",
                  verticalAlign: "middle",
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
