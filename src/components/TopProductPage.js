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
    return (
      <div className="bar-details-div">
        <BarChart {...this.props} />
      </div>
    );
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
