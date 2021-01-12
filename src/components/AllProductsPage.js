import React, { Component } from 'react'
import ProductList from './ProductList'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../actions/productActions'

class AllProductsPage extends Component {
    render() {
        // console.log("AllProductPage Props", this.props)
        return (
            <div>
                <ProductList {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log("mapStatetoprops productss", state)
    return {products : state.products}
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage)
