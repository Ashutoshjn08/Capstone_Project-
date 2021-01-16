import React, { Component } from 'react'
import UpdateProductForm from './UpdateProductForm'
import * as action from '../actions/productActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UpdateProductPage extends Component {

    updateProduct = (product) => {
        let id = this.props.location.state.id;
        let flag = window.confirm("Are you sure to leave this page");
        if(!product.price || !product.quantity || !product.category || !product.image){
            if(flag){
                this.props.history.push('/products')
            }
        } else{
            this.props.actions.updateProduct(product, id);
        }
        
    }

    render() {
        return (
            <div>
                <UpdateProductForm updateProductProp = {this.updateProduct} {...this.props.location.state}/>
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