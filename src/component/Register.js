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
import './Register.css';


export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        name: "",
        email:"",
        password:"",
        cpassword:"",
        age:"",
        gender:"",
        height:"",
        weight:""
    };
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Hi! Fill the form</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Full Name</InputLabel>
                                <Input name="name" type="text"  id="name" autoComplete="" autoFocus onChange ={this.handleNameChange}/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.handleEmailChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
                                <Input
                                    name="cPassword"
                                    type="password"
                                    id="cPassword"
                                    autoComplete="current-password"
                                    onChange = {this.handleCPasswordChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="age">Age</InputLabel>
                                <Input name="age" type="int"  id="age" autoComplete="age" autoFocus onChange = {this.handleAgeChange}/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="gender">Gender</InputLabel>
                                <Input name="gender" type="text"  id="gender" autoComplete="gender" autoFocus onChange = {this.handleGenderChange}/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="height">Height</InputLabel>
                                <Input name="height" type="float"  id="height" autoComplete="height" autoFocus onChange = {this.handleHeightChange}/>
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="weight">Weight</InputLabel>
                                <Input name="weight" type="float"  id="weight" autoComplete="weight" autoFocus onChange = {this.handleWeightChange}/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleRegister}>
                                Register
                            </Button>
                            <Button
                                href="/"
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit" >
                                Go Back
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );



    }
    handleRegister = event => {
        if(this.state.height!="" && this.state.weight !="" && this.state.password!="" && this.state.cpassword!="" && this.state.email!="" && this.state.age !="" && this.state.gender!="" && this.state.name!=""){
            if(this.state.password == this.state.cpassword){
                if(parseInt(this.state.age) > 0 && parseInt(this.state.height) > 0 && parseFloat(this.state.weight) > 0 ){
                    localStorage.setItem('user', this.state.email);
                    localStorage.setItem('password', this.state.password);
                    alert("Successfully Register");
                }else{
                    alert("Write a valid numeric data");
                }
            }else{
                alert("Password and Confirmation password doesn't match");
            }
        }else{
            alert("Complete the form please");
        }

    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }
    handleCPasswordChange = event => {
        this.setState({
            cpassword: event.target.value
        });
    }
    handleAgeChange = event => {
        this.setState({
            age: event.target.value
        });
    }
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        });
    }
    handleHeightChange = event => {
        this.setState({
            height: event.target.value
        });
    }
    handleWeightChange = event => {
        this.setState({
            weight: event.target.value
        });
    }
}
export default  Register;
