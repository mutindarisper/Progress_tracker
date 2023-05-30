import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    // cutoutPercentage: 50,

    plugins: {
      legend: {
        display: false
        // position: 'top',
      },
      title: {
        display: true,
        // text: 'Land Cover Chart',
      },
    },
  };


const PieChart = ({data}) => {
  return (
    <Doughnut options={options}  data={data}  width={300}
     height={250}  />
  )
}

export default PieChart