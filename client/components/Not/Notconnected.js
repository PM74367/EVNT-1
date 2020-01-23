import React, {Component} from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Content from './Content'

class Notconnected extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <div style={{height: '120px'}}></div>
                <Content />
            </div>
        );
    }
}

export default Notconnected;