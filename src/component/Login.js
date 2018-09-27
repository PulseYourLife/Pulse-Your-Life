import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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

    render(){
        const StatisticsView = () =>(
            <Statistics/>
        );
        const RegisterView = () => (
            <Register/>
        );
        function verify() {
            if(document.getElementById('email').value == localStorage.getItem('user')  && document.getElementById('password').value == localStorage.getItem('password')){
                localStorage.setItem('isLoggedIn', true);
                alert("Successfull login");
            }else{
                localStorage.setItem('isLoggedIn', false);
                alert("Try again");
            }
        }
        return (
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <main className="layout">
                        <Paper className="paper">
                            <Avatar className="avatar">
                                <LockIcon />
                            </Avatar>
                            <Typography variant="headline">Hi! Sign in</Typography>
                            <form className="form">
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="email" name="email" autoComplete="email" autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <Button
                                    href="/Statistics"
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    onClick = {verify}>
                                    Sign in
                                </Button>
                                <br></br>
                                <Button
                                    href="/Register"
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                    >
                                    Register
                                </Button>
                            </form>
                        </Paper>
                    </main>
                </React.Fragment>
            </Router>
        );
    }

}
export default Login;