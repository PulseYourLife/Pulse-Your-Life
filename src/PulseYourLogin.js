import React from 'react';
import {Login} from './component/Login';
import {Register} from './component/Register';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import {About} from './component/About'
export class PulseYourLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const LoginView = () => (
            <Login/>
        );
        return (
                    <Router>
                        <div className="App">
                            <header className="App-header">
                                <h1 className="App-title">Pulse Your Life </h1>
                            </header>
                            <ul>
                                <li><Link to="/">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                            <div>
                                <Route exact path="/" component={LoginView}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/about" component={About}/>
                            </div>


                        </div>

                    </Router>
                );
    }

}
export default PulseYourLogin;