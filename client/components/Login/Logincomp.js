import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom'
import history from '../../history';

const style = {
    margin: 15,
};

class Logincomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show1: false,
            show2: false,
            error: '',
            redirect: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            history.push(`/Form/:${this.state.username}`);
        }
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.setState({ show2: false, show1: false });
        const User = {
            username: this.state.username.toLowerCase(),
            password: this.state.password
        };

        fetch("http://localhost:5000/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(User)
        }).then(res => {
            return res.json()
        }).then(res2 => {
            if (res2.flag) {
                this.setState({ redirect: true });
                this.renderRedirect();
            }
            else if (res2.username) {
                this.setState({ show1: true, error: res2.username });
            }
            else if (res2.password) {
                this.setState({ show2: true, error: res2.password });
            }
        }).catch(err => {
            console.log(err);
        })
    };
    
    render() {
        return (
            <div>
                <div style={{ padding: '1em' }}> </div>

                {this.state.show1 && <div style={{ fontSize: '50px', color: 'red' }}> {this.state.error} </div>}
                {this.state.show2 && <div style={{ fontSize: '50px', color: 'red' }}> {this.state.error} </div>}

                <MuiThemeProvider>
                    <div>
                        <form onSubmit={this.clickHandler}>
                            <TextField
                                id="username"
                                type="email"
                                hintText="Enter your Username"
                                floatingLabelText="Username"
                                autoFocus
                                required
                                onChange={(event, newValue) => this.setState({ username: newValue, show1: false })}
                            />
                            <br />
                            <TextField
                                id="password"
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange={(event, newValue) => this.setState({ password: newValue, show2: false })}
                            />
                            <br />
                            <Button label="Login" primary={true} style={style} type="submit" />
                        </form>
                        <p>
                            Not Registered yet, Register Now
                            </p>
                        <Link to='/Register'>
                            <Button label="Register" primary={true} style={style} />
                        </Link>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Logincomp;