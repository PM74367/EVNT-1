import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center sticky-top">
                <img className="navbar-brand mr-0" src={require("../images/logo.png")} alt ="logo" style={{width:'150px', height:'70px'}} />
                    <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item">
                                <p className="text-center" style={{fontSize:'50px', color:'#26acd9', fontFamily:'Georgia', fontWeight:'bold'}}> {this.props.name} </p>
                                </li>   
                            </ul>
                    </div>
           </nav> 
        )
    }
}

export default Navbar;