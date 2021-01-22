import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../actions/productActions";
import BarChart from "./BarChart";

class TopProductPage extends Component {
  constructor(props) {
    super(props);
    this.productsList = [];
  }

  render() {
    if(this.props.products.length>10){
      return (
        <div className="bar-details-div">
          <BarChart {...this.props} />
        </div>
      );
    }else{
      return(
        <div style={{ backgroundColor:"rgb(47, 48, 48)", }} className= "less-top-products">
        <h2>There are not more than 10 items to show the Top Products</h2>
        <br />
        <br />
        <a
          href = "/products"
          style={{marginLeft: "5px", textAlign: "center", width: "150px" }}
          className="btn btn-primary"
        >
          <span>Go back</span>
        </a>
      </div>
      )
    }

  }
}

function mapStateToProps(state, ownProps) {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(action, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TopProductPage);
