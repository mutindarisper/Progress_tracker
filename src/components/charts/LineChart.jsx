import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
    responsive: true,
    scales: {
        xAxes: [{
         //   stacked: true,
      
           
           
           ticks: {
              beginAtZero: true,
            
              fontColor: '#000',
           },
           gridLines: {
              display: false,
               color: '#eee',
               // padding: 2
           }
        }],
        yAxes: [{
         //   stacked: true,
         // stepSize: 10000,
         scaleLabel: {
                 display: true,
                 fontStyle: "bold",
                 fontFamily: "Helvetica",
                //  labelString: sub_indicator === 'Precipitation Index' ? 'Values' : 'Area in Hectares (Ha)'
             },
                // barPercentage: 0.95,
              
            ticks: {
               beginAtZero: true,
                
              // fontColor: '#2FA036',
              fontSize: 10,
           },
           gridLines: {
              display: true,
              color: '#d9dcd6'
              
           }
        }]
     },

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

  export const linechartOptions = {
  
        plugins: {
            legend: {
                display: false,
              
                
              },

        },
        scales:{
            x: {
                border: {
                  display: true
                },
                grid: {
                  display: false,
                  drawOnChartArea: true,
                  color:'red'
                }
              },
              y: {
                border: {
                  display: false
                },
                // grid: {
                 
                //   color:'white'
                // }
              },

        },
        responsive: true,
        maintainAspectRatio: false,
      

      }
    

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [20,40,60,80,100,5],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: [120,140,160,180,100,15],
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };






const LulcBar = ({data}) => {
  return (
     <Line options={linechartOptions} data={data}  width={300}
     height={250}  />
  )
}

export default LulcBar