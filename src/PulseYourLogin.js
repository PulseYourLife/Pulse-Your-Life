import React from 'react';
import {Login} from './component/Login';
import {Statistics} from './component/Statistics';
import {Register} from './component/Register';
import {Perfil} from './component/Perfil';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import {About} from './component/About'
export class PulseYourLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const LoginView = () => (
            <Login />
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
                            <div>
                                <Route exact path="/" component={LoginView}/>
                            </div>


                        </div>

                    </Router>
                );
    }

}
export default PulseYourLogin;