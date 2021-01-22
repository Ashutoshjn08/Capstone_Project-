import React, { Component } from 'react'
import UpdateProductForm from './UpdateProductForm'
import * as action from '../actions/productActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UpdateProductPage extends Component {

    updateProduct = (product) => {
        let id = this.props.location.state.id;
        this.props.actions.updateProduct(product, id);       
    }

    render() {
        return (
            <div className="ui container">
                <UpdateProductForm updateProductProp = {this.updateProduct} {...this.props.location.state}{...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log("mapStatetoprops product", state)
    return {product : state.product}
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProductPage)