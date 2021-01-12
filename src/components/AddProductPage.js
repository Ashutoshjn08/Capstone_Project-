import React, { Component } from 'react'
import AddProductForm from './AddProductForm'
import * as action from '../actions/productActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddProductPage extends Component {

    addProduct = (product) => {
        this.props.actions.addProduct(product);
        this.props.history.push('/products')
    }

    render() {
        return (
            <div>
                <AddProductForm addProductProp = {this.addProduct}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage)