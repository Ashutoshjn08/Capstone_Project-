import React, { Component } from "react";
import AddProductForm from "./AddProductForm";
import * as action from "../actions/productActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Prompt } from "react-router-dom";

class AddProductPage extends Component {
  state = {
    transition: false,
    escapeTransition: false,
  };

  checkTran = () => {
    this.setState({ escapeTransition: 50 });
  };
  isTransition = () => {
    this.setState({ transition: true });
  };

  addProduct = (product) => {
    this.setState({ escapeTransition: true }, () => {
      this.props.actions.addProduct(product);
      this.props.history.push("/products");
    });
  };

  render() {
    return (
      <div className="container">
        <AddProductForm
          tran={this.isTransition}
          {...this.props}
          addProductProp={this.addProduct}
        />
        {this.state.escapeTransition === true ? null : (
          <Prompt
            when={this.state.transition}
            message="Are you sure you want to leave?"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // console.log("mapStatetoprops product", state)
  return { product: state.product };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(action, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);
