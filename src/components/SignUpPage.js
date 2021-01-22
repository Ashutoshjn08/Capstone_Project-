import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../actions/userActions'
import SignUpForm from './SignUpForm';

class SignUpPage extends Component {

    submitForm = (user) => {
        debugger;
        this.props.actions.addUser(user);
    }

        render() {
        console.log(this.props)
        return (
            <div className = "ui container div-signin">
                <SignUpForm submitFormBtn = {this.submitForm} {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);