import React, {Component} from 'react';
import Navbar from '../Navbar/navbar.jsx';
import Logincomp from './Logincomp';

class Login extends Component {
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Navbar name="Login"/>
                <Logincomp />
            </div>
        );
    }
}


export default Login;