import ChartistGraph from 'react-chartist';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Healing from '@material-ui/icons/Healing';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import Chart from './Chart';

export class Statistics extends React.Component {

    constructor(){
        super();
        this.state={
            charData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
            //Ajax calls here
            charData:{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
                    'Week 6'],
                datasets: [
                    {
                        label: 'Your Pulse',
                        data: [
                            212,
                            123,
                            345,
                            245,
                            234,
                            231,
                            789
                        ],
                        backgroundColor: [
                            'rgba(128, 255, 96 , 0.6)',
                            'rgba(54, 162, 235 , 0.6)',
                            'rgba(255, 206, 86 , 0.6)',
                            'rgba(75, 192, 192 , 0.6)',
                            'rgba(153, 102, 255 , 0.6)',
                            'rgba(255, 159, 64 , 0.6)',
                            'rgba(255, 99, 132 , 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {



    return (
	
	<React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <div className="App">
                        <Chart chartData={this.state.charData} legendPosition="bottom" />
                    </div>
                </main>
            </React.Fragment>
	
	
      
    );
  }
}
export default Statistics;
