import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Edit from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Perfil.css';
import {Menu} from './Menu';


export class Perfil extends React.Component{
    render(){
        return (
            <React.Fragment>
				<Menu />
                <main className="lay">				
                    <Paper className="pap">
                        <Avatar className="perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0l-p8Oe5wqHfNQv0L6A4OuAfrZmb7M6Wvnd7-LeMQB6BmBu37Sg"/>
                        <Typography class="nombre">Roberto Gomez</Typography>
                            <form className="form">
                            <FormControl margin="left"  fullWidth>
                                <label class="texto">12/09/18  <Edit/></label>
                            </FormControl>

                            <FormControl margin="normal" fullWidth>
                                <label class = "texto">Email: roberto_0356@gmail.com  <Edit/></label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto"> Age: 30  </label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Gender : Male</label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Height: 1,80 cm  <Edit/></label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Weight: 70 kg  <Edit/></label>
                            </FormControl>
                            </form>

                        <FormControl fullWidth>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit" >
                                    Save
                                </Button>
                        </FormControl>
                        <FormControl fullWidth>
                        <Button
                            type="submit"
                            fullWidth
                            variant="raised"
                            className="submit" >
                            Cancel
                        </Button>
                        </FormControl>
                    </Paper>
                </main>
            </React.Fragment>
        );



    }





}
export default  Perfil;