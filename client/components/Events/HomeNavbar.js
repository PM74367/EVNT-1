import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from '../../history';
const style = {
    margin: 15,
};

class HomeNavbar extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:''
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (event) =>{
        history.push(`/Form/:${this.state.username}`);
    }

    componentDidMount() {
        var str = history.location.pathname
        var array = str.split(":",2);
        this.setState({username:array[1]});
        console.log(this.state.username);
    }

    render() {
        return (
            <div className="container">
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
                                <RaisedButton label="Create Event" primary={true} onClick={this.clickHandler} style={style} />
                            </li>
                            <li className="nav-item" style={{padding:'5px 10px', float:'right'}}>
                                <Link to='/Logout'>
                                    <RaisedButton label="Logout" primary={true} style={style} />
                                </Link>
                            </li>
                        </ul>
                    </MuiThemeProvider>
                    </nav>
                </div>
            </div>
        )
    }
}

export default HomeNavbar;