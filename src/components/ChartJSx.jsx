import React, { useState } from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {
    const [chartData, setChartData] = useState([45, 52, 38, 45, 19, 23]); 
    const [chartLabels, setChartLabels] = useState([
        "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);

    const options = {
        chart: {
            id: "crypto-chart",
            type: "line",
            background: "inherit",
            toolbar: { show: false },
        },
        grid: {
            show: true,
            borderColor: "#E0E0E0",
            strokeDashArray: 1,
        },
        xaxis: {
            categories: chartLabels,
            title: {
                text: undefined,
            },
            labels: {
                show: true,
                style: { colors: "#A0C4FF" },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: { colors: "#A0C4FF" },
            },
        },
        stroke: {
            curve: "smooth",
            width: 3,         
            colors: ["#87CEEB"],
        },
        dataLabels: {
            enabled: false, 
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
        },
    };

    const series = [
        {
            name: "Price",
            data: chartData,
        },
    ];

    return <Chart options={options} series={series} type="line" height={400} />;
};

export default ChartComponent;
