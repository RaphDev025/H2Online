import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {
    const [chartOptions] = useState({
        series: [
            {
                name: 'Monthly Sales',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150],
            },
        ],
        options: {
            chart: {
                type: 'line',
                toolbar: { show: true, autoSelected: 'zoomY', },
                zoom: { enabled: true, type: 'xy', },
            },
            dataLabels: { enabled: false,},
            stroke: { curve: 'smooth', },
            xaxis: { categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], }, 
            tooltip: { x: { format: 'MMM', }, },
        },
    });

    return (
        <div className="h-100">
            <Chart options={chartOptions.options} series={chartOptions.series} type="line" height={'100%'}/>
        </div>
    )
}

export default LineChart