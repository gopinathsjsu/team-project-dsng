import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import { config } from "../../Constants";
import AuthContext from "../context/AuthContext";
import { Form } from "semantic-ui-react";
Chart.register({ id: 'category2', type: 'category', ticks: { align: 'center' } });

const instance = axios.create({
    baseURL: config.url.API_BASE_URL
});

function basicAuth(user) {
    if (user) {
        return `Basic ${user.authdata}`;
    }
    return null;
}

class PieChartComponent extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: []
                    }
                ],
            },
            options: {},
        };
    }

    getData() {
        const Auth = this.context;
        const user = Auth.getUser();

        instance
            .get('/api/log-hours/total-machine-hours', {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: basicAuth(user),
                },
            })
            .then(response => {
                const labels = Object.keys(response.data);
                const data = Object.values(response.data);
                const backgroundColors = this.generateBackgroundColors(data.length);

                this.setState({
                    chartData: {
                        labels: labels,
                        datasets: [
                            {
                                data: data,
                                backgroundColor: backgroundColors
                            }
                        ],
                    },
                });
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getData();
    }

    generateBackgroundColors(count) {
        const backgroundColors = [];
        const colorPalette = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];

        for (let i = 0; i < count; i++) {
            backgroundColors.push(colorPalette[i % colorPalette.length]);
        }

        return backgroundColors;
    }

    render() {
        return (
            <div style={{ width: '400px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {this.state.chartData.datasets && this.state.chartData.datasets.length > 0 ? (
                    <Pie data={this.state.chartData} options={this.state.options} />
                ) : (
                    <p>No data to display.</p>
                )}
            </div>
        );
    }
}

export default PieChartComponent;