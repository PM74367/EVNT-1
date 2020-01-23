import React, {Component} from 'react';
import HomeNavbar from './HomeNavbar';
import Eventcomp from './Eventcomp';


class Events extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <div style={{height:'100px'}}>
                    {/* dummy div */}
                </div>
                <Eventcomp />
            </div>
        );
    }
}

export default Events;