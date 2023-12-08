import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({data}) => {
    const chartData = {
        labels: ['Completed', 'Credit Balance', 'Settled Account', 'Pending'],
        datasets: [
            {
                label: 'Stats',
                data: data, // Initialize with your data
                backgroundColor: ['#85C4ED', '#014F80', '#0094D4', '#0F6DAD'],
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <Doughnut data={chartData} options={options} />
        </div>
    )
}

export default DoughnutChart