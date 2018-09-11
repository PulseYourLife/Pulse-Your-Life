import React from 'react';
import {Login} from './component/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
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
                            <div>
                                <Route exact path="/" component={LoginView}/>
                            </div>
                        </div>
                    </Router>
                );
    }

}
export default PulseYourLogin;