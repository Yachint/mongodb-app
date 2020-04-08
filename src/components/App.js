import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Router, Route} from 'react-router-dom';
import User_List from './User_List';
import User_Edit from './User_Edit';
import User_Create from './User_Create';
import Navbar from './Navbar';
import history from '../history';


const App = () => {  
    return(
        <div className="container">
            <Router history={history}>
                <Navbar />
                <br />
                <Route path="/" exact component = {User_List} />
                <Route path="/edit/:id" exact component= {User_Edit}/>
                <Route path="/create" component= {User_Create} />
            </Router>
        </div>
    );
}

export default App;