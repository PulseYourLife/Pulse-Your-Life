import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import FormControl from '@material-ui/core/FormControl';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Perfil.css'

export class Perfil extends React.Component{
    render(){
        return (
            <React.Fragment>

                <main className="lay">
                    <Paper className="pap">
                        <Avatar className="perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0l-p8Oe5wqHfNQv0L6A4OuAfrZmb7M6Wvnd7-LeMQB6BmBu37Sg"/>
                        <Typography class="nombre">Roberto Gomez</Typography>

                            <FormControl margin="left"  fullWidth>
                                <label class="texto">12/09/18</label>
                            </FormControl>

                            <FormControl margin="normal" fullWidth>
                                <label class = "texto">Email: roberto_0356@gmail.com</label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto"> Age: 30</label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Gender : Male</label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Height: 1,80 cm</label>
                            </FormControl>

                            <FormControl margin="normal"  fullWidth>
                                <label class = "texto">Weight: 70 kg</label>
                            </FormControl>




                    </Paper>
                </main>
            </React.Fragment>
        );



    }





}
export default  Perfil;