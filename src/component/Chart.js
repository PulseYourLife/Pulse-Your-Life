import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData

        }
    }

    static defaultProps ={
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }


    render(){
        return(
            <div className="chart">
                <Bar
                    width={100}
                    height={50}
                    data={this.state.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Your heart rate per week',
                            fontSize:25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position:this.props.legenPosition
                        }
                    }}
                />

                <Line
                    width={100}
                    height={50}
                    data={this.state.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Your heart rate per year',
                            fontSize:25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position:this.props.legenPosition
                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Other',
                            fontSize:25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position:this.props.legenPosition
                        }
                    }}
                />
            </div>
        );
    }
}
export default Chart;