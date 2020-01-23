import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
    margin: 15,
};

class HomeNavbar extends Component {
    render() {
        return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-item" style={{padding:'5px 25px'}}>
                    <img className="navbar-brand mr-0" src={require("../images/logo.png")} alt ="logo" style={{width:'150px', height:'70px'}} />
                </li>
            </ul>
            <MuiThemeProvider>
                <ul className="navbar-nav">
                    <li className="nav-item" style={{padding:'5px 10px', float:'right'}}>
                        <Link to='/Login'>
                            <RaisedButton label="Login" primary={true} style={style} />
                        </Link>
                    </li>
                    <li className="nav-item" style={{padding:'5px 10px', float:'right'}}>
                        <Link to='/Register'>
                            <RaisedButton label="Register" primary={true} style={style} />
                        </Link>
                    </li>
                </ul>
            </MuiThemeProvider>
            </nav>
        </div>
        )
    }
}

export default HomeNavbar;