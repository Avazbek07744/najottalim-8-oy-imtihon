import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const ChartJSx = () => {
    const [chartData, setChartData] = useState({})

    setChartData({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    })

    return (
        <div>
            {chartData && chartData?.series && (
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                />
            )}
        </div>
    )
}

export default ChartJSx
