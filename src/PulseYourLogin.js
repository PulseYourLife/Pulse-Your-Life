import React from 'react';
import {Login} from './component/Login';
import {Statistics} from './component/Statistics';
import {Register} from './component/Register';
import {Perfil} from './component/Perfil';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import {About} from './component/About'
localStorage.setItem('user', "david");
localStorage.setItem('password', "david");
localStorage.setItem('isLoggedIn', false);
export class PulseYourLogin extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
        email:"",
        password:""
    };
    LoginView = () => (
        <Login handleLogin={this.handleSubmit}
               handleEmailChange={this.handleEmailChange}
               handlePasswordChange={this.handlePasswordChange} />
    );
    render() {
        const ProfileView  = () => (
            <Perfil/>
        );
        const AboutView  = () => (
            <About/>
        );
        const LogView = () => (
            <Login />
        );
		const StatisticsView = () => (
            <Statistics />			
        );
        const RegisterView = () => (
            <Register />
        );
        if(this.state.isLoggedIn){
            return (
                <Router>
                    <div>
                        <div>
                            <Route exact path="/" component={StatisticsView} />
                            <Route exact path="/Profile" component={ProfileView} />
                            <Route exact path="/About" component={AboutView} />
                            <Route exact path="/Login" component={LogView} />
                        </div>
                    </div>
                </Router>
            );
        }else{
            return(
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img className='img2' src="https://png2.kisspng.com/20180215/pce/kisspng-pulse-heart-rate-ekg-cliparts-5a85f54d43d531.2241024415187285252779.png"/>
                            <img className='img2' src="https://png2.kisspng.com/20180215/pce/kisspng-pulse-heart-rate-ekg-cliparts-5a85f54d43d531.2241024415187285252779.png"/>
                            <h1 className="App-title">Pulse Your Life </h1>
                        </header>
                        <div>
                            <Route exact path="/" component={this.LoginView}/>
                            <Route exact path="/Register" component={RegisterView}/>
                            <Route exact path='/Statistics' component={StatisticsView}/>
                            <Route exact path="/Profile" component={ProfileView} />
                            <Route exact path="/About" component={AboutView} />
                            <Route exact path="/Login" component={this.LoginView} />
                        </div>
                    </div>
                </Router>
            );
        }
    }
    handleSubmit = event => {
        if (this.state.email === localStorage.getItem("user") &&
            this.state.password === localStorage.getItem("password")) {
            localStorage.setItem("isLoggedIn", true);
            this.setState({ isLoggedIn: true });
        }
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }
}
export default PulseYourLogin;