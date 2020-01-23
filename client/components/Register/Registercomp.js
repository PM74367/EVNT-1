import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import history from '../../history';

class Registercomp extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password1:'',
            password2:'',
            show1: false,
            show2: false,
            error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({show2: false, show1: false})
        const newUser = {
            first_name: this.state.first_name.toLowerCase(),
            last_name: this.state.last_name.toLowerCase(),
            email: this.state.email.toLowerCase(),
            password1: this.state.password1,
            password2: this.state.password2,
            admin: false,
            events: []
          };

        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then( res => {
            return res.json();
        }).then(res2 => {
            if(res2.flag) {
                history.push('/Login');
            }
            else if(res2.err) {
                this.setState({show2:true, error: res2.err});
            }
            else if(res2.unique) {
                this.setState({show1:true, error: res2.unique});
            }
        })
        .catch( err => {
            console.log(err);
        });
    };
    render() {
        return (
            <div>
                <div style={{padding: '1em'}}> </div>

                {this.state.show1 && <div style={{fontSize:'50px', color:'red'}}> {this.state.error} </div>}
                {this.state.show2 && <div style={{fontSize:'50px', color:'red'}}> {this.state.error} </div>}

                <div style={{padding: '1em'}}> </div>
                
                <MuiThemeProvider>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="first"
                                hintText="Enter your First Name"
                                floatingLabelText="First Name"
                                required
                                autoFocus
                                onChange = {(event, newValue) => this.setState({first_name:newValue})}
                            />
                            <br/>
                            <TextField
                                id="last"
                                hintText="Enter your Last Name"
                                floatingLabelText="Last Name"
                                required
                                onChange = {(event, newValue) => this.setState({last_name:newValue})}
                            />
                            <br/>
                            <TextField
                                id="email"
                                hintText="Enter your Email"
                                type="email"
                                floatingLabelText="Email"
                                required
                                onChange = {(event, newValue) => this.setState({email:newValue, show1: false})}
                            />
                            <br/>
                            <TextField
                                id="password1"
                                type = "password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange = {(event, newValue) => this.setState({password1:newValue, show2: false})}
                            />
                            <br />
                            <TextField
                                id="password2"
                                type = "password"
                                hintText="Confirm your Password"
                                floatingLabelText="Password"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange = {(event, newValue) => this.setState({password2:newValue, show2:false})}
                            />
                            <br/>
                            <Button label="Register" primary={true} style={{margin:15}} type="submit" />
                        </form>
                        <p>
                            Already Registered, Login Now
                        </p>
                        <Link to='/Login'>
                            <Button label="Login" primary={true} style={{margin:15}} type="submit"/> 
                        </Link>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Registercomp;