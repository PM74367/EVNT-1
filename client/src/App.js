import React, { Component } from 'react';
import {Router,Switch,Route} from 'react-router-dom';
import history from './history';
import MainPage from './components/Mainpage/mainPage.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Nomatch from './components/Nomatch/Nomatch';
import Logout from './components/Logout/Logout'
import Form from './components/Form/Form';
import Event from './components/Events/Event'

class App extends Component {
    render() {
        return (

            <Router history={history}>
                <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/Logout' component={Logout} />
                        <Route path='/Form' component={Form} />
                        <Route path='/Event' component={Event} />
                        <Route path="*" component={Nomatch} />
                </Switch>
            </Router>
        );
    }
}

export default App;
