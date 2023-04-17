import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {bookApi} from "../misc/BookApi";
import {handleLogError} from "../misc/Helpers";




const Activities = ({ userName,logHours }) => {
    const [timeRange, setTimeRange] = useState("week");
    console.log(logHours, "Nilay")


    const getLabels = () => {
        switch (timeRange) {
            case "week":
                return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            case "month":
                return Array.from({ length: 30 }, (_, i) => i + 1);
            case "90days":
                return Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`);
            default:
                return [];
        }
    };

    // Static data arrays for Treadmill and Cycling
    const treadmillData = {

        data: logHours.treadmil,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
    };
    console.log(treadmillData)

    const cyclingData = {
        data: logHours.cycling,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
    };

    const stairData = {
        data: logHours.stair,
        backgroundColor: "rgb(243,240,188)",
        borderColor: "rgb(250,246,2)",
        borderWidth: 1,
    };

    const chartData = {
        labels: getLabels(),
        datasets: [
            {
                label: "Treadmill",
                ...treadmillData,
            },
            {
                label: "Cycling",
                ...cyclingData,
            },
            {
                label: "Stair",
                ...stairData,
            },

        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: `${userName}'s Recent Activity Graph`,
                font: { size: 20 },
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: { size: 16 },
                },
            },
        },
    };

    return (
        <div>
            <div>
                {/* Radio buttons for time range selection */}
                <label>
                    <input
                        type="radio"
                        name="time-range"
                        value="week"
                        checked={timeRange === "week"}
                        onChange={() => setTimeRange("week")}
                    />
                    Past Week
                </label>
                <label>
                    <input
                        type="radio"
                        name="time-range"
                        value="month"
                        checked={timeRange === "month"}
                        onChange={() => setTimeRange("month")}
                    />
                    Past Month
                </label>
                <label>
                    <input
                        type="radio"
                        name="time-range"
                        value="90days"
                        checked={timeRange === "90days"}
                        onChange={() => setTimeRange("90days")}
                    />
                    Last 90 Days
                </label>
            </div>
            <div style={{ width: "800px", height: "400px" }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Activities;