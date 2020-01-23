import React, {Component} from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';

const Background = require("../images/headerbg.jpg");
var sectionStyle = {
    className: "img-fluid",
    backgroundImage: `url(${Background})`,
	backgroundRepeat:'no-repeat',
    backgroundSize:'100% 100% ',
    height:'700px'
};
class Logout extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <div className="container-fluid" style={{height:'600px'}}>
		            <div style={sectionStyle}>
		            </div>
                </div>
            </div>
        );
    }
}


export default Logout;