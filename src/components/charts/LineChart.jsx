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
    scales: {
        yAxes: [
            {
              gridLines: {
                display: true,
                color: "red",
                zeroLineColor: "blue"
              }
            }
          ],
          xAxes: [ {
            scaleLabel: {
                  display: true,
                  fontStyle: "bold",
                  fontFamily: "Helvetica",
                  labelString: 'Years'
              },
            gridLines: {
              color: "blue"
            }
          }]
        },
        plugins: {
            legend: {
                display: false,
              
                
              },

        },
        
        responsive: true,
        maintainAspectRatio: false
      }
    







const LulcBar = ({data}) => {
  return (
     <Line options={linechartOptions} data={data}  width={300}
     height={250}  />
  )
}

export default LulcBar