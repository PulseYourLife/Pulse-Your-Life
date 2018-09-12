import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

export class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">
                    <Paper className="paper">
                        <Button variant={"raised"} color={"primary"} size={"large"}>Google Play</Button>
                        <br/><br/>
                        <Button variant={"raised"} color={"primary"} size={"large"}>Github</Button>
                        <br/><br/>
                        <Typography variant={"headline"}>Developers:</Typography>
                        <br/>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>Daniel D'aleman</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            https://github.com/danielDaleman
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}><br/></Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                                            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud
                                            exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis
                                            aute iure
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur
                                            sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
                                            mollit
                                            anim id est laborum.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>Diego Borrero</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            https://github.com/DxMortem
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}><br/></Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                                            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud
                                            exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis
                                            aute iure
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur
                                            sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
                                            mollit
                                            anim id est laborum.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>David Vaca</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            https://github.com/vdavid30
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}><br/></Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                                            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud
                                            exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis
                                            aute iure
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur
                                            sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
                                            mollit
                                            anim id est laborum.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>Brandon Prieto</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            https://github.com/brandonp93
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}><br/></Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                                            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud
                                            exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis
                                            aute iure
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur
                                            sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
                                            mollit
                                            anim id est laborum.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}
