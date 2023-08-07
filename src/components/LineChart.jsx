import React from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#581C87',
                borderColor: '#581C87',
            },
        ],
    };

    const options = {
        scales: {
            y:
            {
                type: 'linear',
                ticks: {
                    beginAtZero: true,
                },
            },

        },
    };

    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl m-2 p-2 font-bold font-serif text-purple-600'>{coinName}</h1>
                <div className='flex space-x-2 mr-2'>
                    <p> <span className='font-bold text-purple-600'>Current : </span>{coinHistory?.data?.change}%</p>
                    <p> <span className='font-bold text-purple-600'>Current  Price : {coinName}</span>  $ {currentPrice}</p>
                </div>
            </div>
            
            <Line data={data} options={options}></Line>
        </>
    )
}

export default LineChart
