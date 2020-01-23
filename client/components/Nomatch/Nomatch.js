import React, { Component } from "react";
import HomeNavbar from '../HomeNavbar/HomeNavbar';


class Nomatch extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <p style={{fontSize:'200px'}}>
                    this is 404
                </p>
            </div>
        );
    }
}
export default Nomatch;