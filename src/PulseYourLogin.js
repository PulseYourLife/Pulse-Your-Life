import React from 'react';
import {Login} from './component/Login';
import {Statistics} from './component/Statistics';
import {Register} from './component/Register';
import {Perfil} from './component/Perfil';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Button from "@material-ui/core/Button";
export class PulseYourLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const LoginView = () => (
            <Login/>			
        );
		
		const StatisticsView = () => (
            <Statistics />			
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
                                <li><Link to="/perfil">Perfil</Link></li>
                            </ul>
                            <div>
                                <Route exact path="/" component={LoginView}/>
								<Route path="/Statistics" component={StatisticsView}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/perfil" component={Perfil}/>
                            </div>


                        </div>

                    </Router>
                );
    }

}
export default PulseYourLogin;