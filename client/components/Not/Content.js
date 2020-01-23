import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <p style={{fontFamily:'Courier New', fontSize:'50px',}}>
                    No Internet
                    Try:
                    <ul>
                        <li>Checking the network cables, modem and router</li>
                        <li>Reconnecting to Wi-Fi</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Content;