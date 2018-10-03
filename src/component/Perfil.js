import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Edit from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup } from 'reactstrap'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './Perfil.css'
localStorage.setItem('nombre', "Brandon Prieto");
localStorage.setItem('email', "brandonp93@gmail.com");
localStorage.setItem('age', "30");
localStorage.setItem('weight', "64");
localStorage.setItem('height', "175");
export class Perfil extends React.Component{
    constructor() {
        super();
    }
    state = {
        name: localStorage.getItem('nombre'),
        email: localStorage.getItem("email"),
        age: localStorage.getItem('age'),
        weight: localStorage.getItem('weight'),
        height: localStorage.getItem('height')
    };

    fileUploadHandler = event =>{

    }

    handleNameChange = event => {
        localStorage.setItem('email1', event.target.value);
    }

    handleEmailChange = event => {
        localStorage.setItem('name1', event.target.value);
    }



    handleHeightChange = event => {
        localStorage.setItem('height1', event.target.value);
        this.setState({
            height: event.target.value
        });
    }

    handleWeightChange = event => {
        localStorage.setItem('weight1', event.target.value);
        this.setState({
            weight: event.target.value
        });
    }

    saveEventHandler = event => {
        localStorage.setItem('nombre', localStorage.getItem('nombre1'));
        localStorage.setItem('email', localStorage.getItem('email1'));
        localStorage.setItem('height', localStorage.getItem('height1'));
        localStorage.setItem('weight', localStorage.getItem('weight1'));
        this.setState({
            email: localStorage.getItem('nombre1'),
            name: localStorage.getItem('email1'),
            height : localStorage.getItem('height1'),
            weight: localStorage.getItem('weight1')
        });
    }

    cancelEventHandler = event => {
        window.location.reload();
        localStorage.setItem('nombre1', localStorage.getItem('nombre'));
        localStorage.setItem('email1', localStorage.getItem('email'));
        localStorage.setItem('height1', localStorage.getItem('height'));
        localStorage.setItem('weight1', localStorage.getItem('weight'));
    }

    render(){
        return (
            <React.Fragment>

                <div class="row">
                    <div class="column">
                        <div class="column11">
                        <Paper className="pap">
                            <img onClick={this.fileUploadHandler} className='img1' src="https://appaplicacionpara.com/wp-content/uploads/2016/06/App-para-escribir-en-fotos.jpg"  />
                            <Typography class ="nombre">{this.state.name}</Typography>
                        </Paper>

                        </div>
                    </div>
                    <div class="column" >

                            <div className='column1'>
                                <form className='form1'>
                                    <FormControl  margin="normal" fullWidth>
                                        <InputLabel htmlFor="name" >Name: {this.state.name}</InputLabel>
                                        <Input id="name" type="text" name="name" autoComplete="name" autoFocus onChange ={this.handleNameChange}/>
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email" >Email: {this.state.email}</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.handleEmailChange} />
                                    </FormControl>
                                    <FormControl  margin="normal" fullWidth>
                                        <InputLabel htmlFor="height" >Height: {this.state.height}</InputLabel>
                                        <Input id="height" type="int"  name="height" autoComplete="height" autoFocus onChange = {this.handleHeightChange}/>
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="weight" >Weight: {this.state.weight}</InputLabel>
                                        <Input id="weight" type="float"  name="weight" autoComplete="weight" autoFocus onChange = {this.handleWeightChange}/>
                                    </FormControl>

                                </form>
                                <div >
                                    <FormControl fullWidth >
                                        <ButtonGroup>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="raised"
                                            color="primary"
                                            onClick={this.saveEventHandler}
                                            className="submit" >
                                            Save
                                        </Button>

                                        <Button
                                            color='secondary'
                                            type="submit"
                                            fullWidth
                                            variant="raised"
                                            onClick={this.cancelEventHandler}
                                            className="submit" >
                                            Cancel
                                        </Button>
                                        </ButtonGroup>
                                    </FormControl>
                                </div>
                            </div>
                    </div>
                </div>







            </React.Fragment>

        );



    }





}
export default  Perfil;