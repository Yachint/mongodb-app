import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../actions';
import { Link } from 'react-router-dom';

class User_List extends React.Component{

    componentDidMount(){
        this.props.getAllUsers();
    }

    deleteUser(id){
        this.props.deleteUser(id);
    }

    renderList(){
        return this.props.users.map(user => {
            return ( 
                <React.Fragment key={user._id}>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.address}</td>
                        <td>{user.pincode}</td>
                        <td><Link to={"/edit/"+user._id}>edit</Link> | <Link to="/" onClick={() => this.deleteUser(user._id)}>delete</Link></td>
                    </tr>
                </React.Fragment>
            );
        });
    }

    render(){
        return(
            <div>
                <h3>Registered Users</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { users: Object.values(state.users) }
}

export default connect(mapStateToProps, {
    getAllUsers: getAllUsers,
    deleteUser: deleteUser
})(User_List);