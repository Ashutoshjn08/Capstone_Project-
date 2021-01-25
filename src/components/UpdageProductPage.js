import React, { Component } from "react";
import UpdateProductForm from "./UpdateProductForm";
import * as action from "../actions/productActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Prompt } from "react-router-dom";

class UpdateProductPage extends Component {
  state = {
    transition: false,
    escapeTransition: false,
  };

  isTransition = () => {
    this.setState({ transition: true },console.log(this.state.transition));
  };

  updateProduct = (product) => {
    debugger;
    
    this.setState({ escapeTransition: true },()=>{
      debugger;
      let id = this.props.location.state.id;
      this.props.actions.updateProduct(product, id);
    });
  };

  render() {
    return (
      <div className="ui container">
        <UpdateProductForm
          tran={this.isTransition}
          updateProductProp={this.updateProduct}
          {...this.props.location.state}
          {...this.props}
        />
        {this.state.escapeTransition === true ? null : (
          <Prompt
            when={this.state.transition}
            message="Are you sure you want kdj to leave?"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { product: state.product };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(action, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProductPage);
