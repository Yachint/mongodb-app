import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../actions';
import UserForm from './User_Form';

class User_Edit extends React.Component{

    componentDidMount(){
        this.props.getUser(this.props.match.params.id);
    }

    onSubmit = (formvalues) => {
        this.props.updateUser(this.props.match.params.id, formvalues);
    }

    render(){
        if(!this.props.user){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit User : {this.props.user.name}</h3>
                <UserForm initialValues ={_.pick(this.props.user,
                'name',
                'email',
                'mobile',
                'address',
                'pincode')}
                onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { user : state.users[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {
    getUser : getUser,
    updateUser: updateUser
})(User_Edit);