import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import history from '../../history';


const style = {
    margin: 15,
};

class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            esubject:'',
            semail:'',
            msg:'',
            ename:'',
            date: null,
            stime: null,
            etime: null
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleStime = this.handleStime.bind(this);
        this.handleEtime = this.handleEtime.bind(this);
    }

    componentDidMount() {
        var str = history.location.pathname
        var array = str.split(":",2);
        this.setState({username:array[1]});
        
    }

    clickHandler = (event) =>{
        event.preventDefault();
        const newEvnt = {
            username:this.state.username,
            esubject:this.state.esubject,
            msg:this.state.msg,
            date:this.state.date,
            stime:this.state.stime.toString(),
            etime:this.state.etime.toString(),
            ename:this.state.ename
          };
          fetch("http://localhost:5000/form", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvnt)
        }).then( res => {
            return res.json();
        }).then(res2 => {
            if(res2.flag) {
                history.push(`/Event/:${this.state.username}`);
            }
        }).catch( err => {
            console.log(err);
        });

    }

    handleDate(event, date){
        this.setState({date: date})
    }

    handleEtime(event, etime){
        var x = new Date("2015-03-25T00:00:00");
        x.setHours(x.getHours() + parseInt(etime.slice(0,2)));
        x.setMinutes(x.getMinutes() + parseInt(etime.slice(3,5)));

        if(etime.slice(6,7) === 'P') {
            x.setHours(x.getHours() + 12);
        }
        this.setState({etime: x})
    }

    handleStime(event, stime){
        var x = new Date("2015-03-25T00:00:00");
        x.setHours(x.getHours() + parseInt(stime.slice(0,2)));
        x.setMinutes(x.getMinutes() + parseInt(stime.slice(3,5)));

        if(stime.slice(6,7) === 'P') {
            x.setHours(x.getHours() + 12);
        }
        this.setState({stime: x})
    }


    render() {
        return (
            <div style={{textAlign:'center'}}>
                
                <div style={{height:'100px'}}>
                    {/* dummy div */}
                </div>
                
                <div style={{height:'150px'}}>
                    <p style={{fontFamily:'Courier New', fontSize:'50px', padding:'25px 0px'}}>
                        Enter Required Details
                    </p>
                </div>
                    <form onSubmit={this.clickHandler}>
                        <MuiThemeProvider>
                            <div>
                                <div style={{height:'20px'}}></div>
                                <span style={{padding:'20px'}}></span>
                                <TextField
                                    id='esubject'
                                    hintText="Email Subject"
                                    floatingLabelText="Email Subject"
                                    required
                                    onChange = {(event, newValue) => this.setState({esubject:newValue})}
                                />
                                <span style={{padding:'20px'}}></span>
                                <TextField 
                                    id="msg"
                                    hintText="Enter Your Message"
                                    floatingLabelText="Enter Your Message"
                                    required
                                    onChange = {(event, newValue) => this.setState({msg:newValue})}
                                />
                                <br />
                                <div style={{height:'20px'}}></div> 
                                
                                <span style={{padding:'20px'}}></span>
                                <TextField 
                                    id="ename"
                                    hintText="Enter Event Name"
                                    floatingLabelText="Enter Event Name"
                                    required
                                    onChange = {(event, newValue) => this.setState({ename:newValue})}
                                />
                                <br />

                            </div>
                        </MuiThemeProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div style={{height:'30px'}}></div>
                            <KeyboardDatePicker
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                value={this.state.date}
                                onChange={this.handleDate}
                                required
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <div style={{height:'30px'}}></div>
                            <span style={{padding:'20px'}}></span>
                            <KeyboardTimePicker
                                id="time-picker"
                                label="Start Time"
                                value={this.state.stime}
                                onChange={this.handleStime}
                                required
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                            <span style={{padding:'20px'}}></span>
                            <KeyboardTimePicker
                                id="time-picker2"
                                label="End Time"
                                value={this.state.etime}
                                onChange={this.handleEtime}
                                required
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        <br />
                    </MuiPickersUtilsProvider>
                    <MuiThemeProvider>
                        <Button label="Submit" primary={true} type="submit" style={style} />
                    </MuiThemeProvider>
                </form>
            </div>
        );
    }
}


export default Form;