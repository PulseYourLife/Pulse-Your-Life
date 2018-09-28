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
import {Login} from './Login';

export class Statistics extends React.Component {
  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'		

	var simpleLineChartData = {
	  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
	  series: [
		[12, 9, 7, 8, 5],
		[2, 1, 3.5, 7, 3],
		[1, 3, 4, 5, 6]
	  ]
    }	

	var lineChartData = {
		labels: [1, 2, 3, 4, 5, 6, 7, 8],
		series: [
			[5, 9, 7, 8, 5, 3, 5, 4]
		]
	}
	
	var lineChartOptions = {
        low: 0,
        showArea: true
    }
      return ( <React.Fragment>
          <CssBaseline />
          <main className="layout">
              <Paper className="paper">
                  <Avatar className="avatar">
                      <Healing />
                  </Avatar>
                  <Typography variant="headline"> MY HEART</Typography>
              </Paper>
              <div>
                  <h1> Your Pulse </h1>
                  <ChartistGraph data={data} options={options} type={type} />
                  <h1> Your Pulse two</h1>
                  <ChartistGraph data={simpleLineChartData} type={'Line'} />
                  <h1> Your Pulse three</h1>
                  <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />
              </div>
              <Button
                  href="/Profile"
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className="submit"
                  >
                  My Account
              </Button>
              <Button
                  href="/About"
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className="submit">
                  About
              </Button>
              <Button
                  href="/Login"
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className="submit">
                  Log Out
              </Button>
          </main>
      </React.Fragment>);
    }
  }
export default Statistics;
