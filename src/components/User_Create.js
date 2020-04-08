import React from 'react';
import UserForm from './User_Form';
import { addUser } from '../actions';
import { connect } from 'react-redux';

class User_Create extends React.Component{

    onSubmit = (formValues) => {
        this.props.addUser(formValues);
    }

    render(){
        return(<div>
            <h3>Register a User</h3>
            <UserForm onSubmit = {this.onSubmit} />
        </div>
        );
    }
}

export default connect(null, {
    addUser : addUser
})(User_Create); 