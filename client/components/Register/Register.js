import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import Registercomp from './Registercomp'

class Register extends Component{
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Navbar name="Register"/>
                <Registercomp />
            </div>
        );           
    }
}
export default Register;