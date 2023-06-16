import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { selectAllScores } from './scores/scoreSlice';

import PieChart from './charts/PieChart'
import LineChart from './charts/LineChart'

import dashboard from "../assets/dashboard.svg"
import homepage from "../assets/homepage.svg"
import report from "../assets/report.svg"
import training from "../assets/training.svg"
import landing from "../assets/landing.svg"
const Landing = () => {
    let link_icons = [landing, homepage, dashboard, report, training]


    const scoreselections = useSelector(selectAllScores)
    const scoreSlice = useSelector((state => state.scoreselections)) //return the entire wetland slice


    let lulcChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
        datasets: [
          {
            data: [10, 5, 60, 10, 100],
            tension: 0.4,
            borderColor: '#fff',
            backgroundColor: 'white'
            // barThickness: 40,
         
         
          },
        ],
      }
      
      const pieData = {
        labels: ['Homepage', 'Dashboard', 'Progress Report', 'Training'],
        datasets: [
          {
            label: 'Completed',
            data: [scoreSlice.homepageMeanScore, 75, 80, 100],
            backgroundColor: [
              '#1c844a',
              '#0f1854',
              '#6acb75',
              '#243492',
             
            ],
            borderColor: [
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
            ],
            borderWidth: 4 ,
          },
        ],
      };
      
  return (
    <div>
          <div className="your_activity absolute ">
        <p className="font-sans text-lg text-blue-900 font-bold mx-10 my-4 ">Your Activity</p>
        <div className="pie_chart">
          <PieChart data={pieData} />

        </div>

      </div>


      <div className="your_activity_2 absolute ">
        <p className="font-sans text-lg text-white font-bold mx-10 my-4 ">Your Activity</p>
        <p className=" last_week font-sans text-base text-white my-4 ">Last Week</p>
        <div className="doughnut_chart">
          <LineChart data={lulcChartData} />

        </div>

      </div>
      <div className="minicharts">
        <div className="homepage_chart ">
          <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">HomePage</div>
          <p className="home_score font-sans text-lg text-white font-bold -my-8 mx-40">{scoreSlice.homepageMeanScore ? Math.round(scoreSlice.homepageMeanScore) + '%' : 0 + '%'}</p>

        </div>
        <div className="dashboard_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Dashboard</div>
            <p className="home_score font-sans text-lg text-white font-bold -my-8 mx-40">75%</p>
        </div>
        <div className="report_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Report</div>
            <p className="home_score font-sans text-lg text-white font-bold -my-8 mx-40">80%</p>
        </div>
        <div className="training_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Training</div>
            <p className="home_score font-sans text-lg text-white font-bold -my-8 mx-40">100%</p>
        </div>


        <div className=" minichart_icons cursor-pointer">
        
         
          <img className='homepage_icon' id='home_id' src={homepage} />
          <img className='homepage_icon' id='dash_id' src={dashboard} />
          <img className='homepage_icon' id='report_id' src={report} />
          <img className='homepage_icon' id='training_id' src={training} />
        
       
      </div>
      </div>
    </div>
  )
}

export default Landing