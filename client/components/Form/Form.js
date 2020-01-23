import React, {Component} from 'react';
import HomeNavbar from './HomeNavbar';
import Formcomp from './Formcomp';


class Form extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <Formcomp />
            </div>
        );
    }
}

export default Form;