import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button, ButtonGroup } from 'reactstrap'
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Register} from './Register';
import {Statistics} from './Statistics';
import './Login.css';
export class Login extends React.Component{
    constructor(props) {
            super(props);
    }
    state = {
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
        email:"",
        password:""
    };

    refEventHandler = event =>{
        window.location.href  = '/Register';

    }

    render(){
        const StatisticsView = () =>(
            <Statistics/>
        );
        const RegisterView = () => (
            <Register/>
        );
        return (
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <main className="layout">
                        <Paper className="paper">
                            <img class='signimg' src="data:image/jpeg;base64,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"/>
                            <Typography variant="headline">Hi! Sign in</Typography>
                            <form className="form">
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.props.handleEmailChange} />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange = {this.props.handlePasswordChange}
                                    />
                                </FormControl>
                                <ButtonGroup>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="secondary"
                                    className="submit"
                                    onClick = {this.props.handleLogin}>
                                    Sign in
                                </Button>

                                    <Button
                                        onClick={this.refEventHandler}
                                        type="submit"
                                        fullWidth
                                        variant="raised"
                                        color="info"
                                        className="submit"> Register</Button>

                                </ButtonGroup>
                            </form>
                        </Paper>
                    </main>
                </React.Fragment>
            </Router>
        );
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
export default Login;