import React, { Component } from 'react'
import ProductList from './ProductList'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../actions/productActions'

class AllProductsPage extends Component {

    incViewCount = (id) =>{
        const product = this.props.products.filter(product => product.id == id);
        this.props.actions.incViewCount(product[0].view, id);
    }

    deleteProducthandle = (id) => {
        this.props.actions.deleteProduct(id);
    }
    render() {
        return (
            <div>
                <ProductList deleteProductProp = {this.deleteProducthandle} incViewCountProp = {this.incViewCount} {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {products : state.products}
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage)
