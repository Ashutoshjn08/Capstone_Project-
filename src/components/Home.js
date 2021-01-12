import React, { Component } from "react";
import "../css/home.css";
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="card text-center">
          <div className="card-header card-head"><h3>Product Inventory</h3></div>
          <div className="card-body">
            <p style = {{textAlign:"justify"}} className = "card-text">
            This system has provision to view the list of products and allows only the registered and authenticated users to add, edit, delete the products and view the product detail. The user interface to the system is implemented using React. The data about the products is managed in a JSON server. The client application interfaces with the JSON Server through http to retrieve and store data. 
            </p>
            <a style = {{width: "200px"}} href="/products" className="btn btn-primary">
              <span>View Our Products</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
