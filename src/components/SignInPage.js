import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../actions/productActions'
import SignInForm from './SignInForm';

class SignInPage extends Component {

        render() {
        return (
            <div className = "ui container div-signin">
                <SignInForm {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions : bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);