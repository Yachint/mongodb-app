import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">User-DB</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">User Database</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Register User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Navbar;