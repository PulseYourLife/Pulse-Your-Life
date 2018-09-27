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
import './Register.css'

export class Register extends React.Component{
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
                                <Input name="name" type="text"  id="name" autoComplete="" autoFocus/>
                            </FormControl>

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

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
                                <Input
                                    name="cPassword"
                                    type="password"
                                    id="cPassword"
                                    autoComplete="current-password"
                                />
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="age">Age</InputLabel>
                                <Input name="age" type="int"  id="age" autoComplete="age" autoFocus/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="gender">Gender</InputLabel>
                                <Input name="gender" type="text"  id="gender" autoComplete="gender" autoFocus/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="height">Height</InputLabel>
                                <Input name="height" type="float"  id="height" autoComplete="height" autoFocus/>
                            </FormControl>


                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="weight">Weight</InputLabel>
                                <Input name="weight" type="float"  id="weight" autoComplete="weight" autoFocus/>
                            </FormControl>


                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit" >
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





}
export default  Register;
