import { useState, useRef  } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Logo from './assets/Grouplogo_avant.svg'
import search from './assets/search.svg'
import girl from './assets/girl.png'
import dashboard from "./assets/dashboard.svg"
import homepage from "./assets/homepage.svg"
import report from "./assets/report.svg"
import training from "./assets/training.svg"
import profile from "./assets/risper.png"
// import viteLogo from '/vite.svg'
// import './App.css'
import LineChart from "./components/charts/LineChart"
import PieChart from './components/charts/PieChart'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Reports from './components/Reports'

function App() {
  const [count, setCount] = useState(0)
  const [barchartData, setBarchartData] = useState({})



  const date = new Date();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let day = date.getDay();
var today_date = date.getDate()
let month = date.getMonth();
let year = date.getFullYear();
let links = ['Homepage', 'Dashboard', 'Reports', 'Trainings']
let link_icons = [homepage, dashboard, report, training]
let task_titles = ['Add banner images', 'Add map functionalities', 'Implement Signup page' ]
let meter_values = [9, 65, 90]

const [homepage_link, setHomepage_link] = useState(false)
const [cliked_link, setCliked_link] = useState('')

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
      data: [100, 75, 80, 100],
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

const data = {
  labels: ['Mon', 'tue', 'wed', 'thur', 'fri'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [20,5,50,10,100],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
 
  ],
};

// const getStats = async () => {
//  return setBarchartData(lulcChartData)

// }
// getStats()

const show_homepage_component = () => {
  setHomepage_link(true)

}


  return (
   
          
  <>
    <div className="sidenav ">
   
      <img className='logo -mx-1 my-10' src={Logo} alt="" />
      <div className="links flex flex-col gap-20	text-white p-12 cursor-pointer">
        {links.map((link) => (
          
           <p  onClick={ () => {  setCliked_link(link) }}>{link}</p>
        ))}
      </div>

      <div className="link_icons">

      </div>

      <div className="link_icons flex flex-col gap-20 p-12">
        {
          link_icons.map( (icon) => 
        
          
          <img className='icons cursor-pointer' src={icon}></img> 
          
          
          )

        }
        <img src="" alt="" />
      </div>
      </div>

      <p className='title mx-56 my-4 text-5xl font-semibold text-blue-900 '>Avant</p> 
      <p className='date '> {`${daylist[day]} ${today_date} ${monthNames[month]} ${year}`} </p>
      <input type='text'  className="search p-6 "  placeholder='Search here...'/>
      <img src={search} alt="" className='search_icon' />
      <div className="banner">
        <p className=' text-blue-800 text-4xl mx-6 my-10'>Hi <span className='text-5xl font-semibold text-blue-900'>Risper</span></p>
        <p className="slogan font-sans mx-6 -my-6 text-green-500 text-xl">Today is a good day to be great!</p>
        <img src={girl} alt="" className="girl" />
      </div>
      {
        // console.log(cliked_link, 'clicked link current')
        cliked_link === 'Homepage' ?  <HomePage />  :  cliked_link === 'Dashboard' ?  <Dashboard /> : cliked_link === 'Reports' ?  <Reports /> : <Landing /> 
           
      }

    
   

      <div className="profile_section bg-green-200">
        <p className='mx-10 my-16 text-2xl font-bold text-blue-900'>My Profile</p>
        <img className=" profile_pic mx-24 my-16  bg-slate-400" src={profile} alt="" />
        <p className=' name text-xl font-bold text-blue-900 mx-32'>Risper Mutinda</p>
        <div className="level mx-40  text-gray-500 text-base">Intermediate</div>

        <div className="tasks">
          <p className="todays_tasks mx-6 font-sans text-base text-blue-900 font-bold">Today's Tasks</p>
          {
            task_titles.map( (task_title) => (
              <p className="flex flex-col gap-20 p-12 font-sans text-base text-blue-900 font-semibold -mx-6">{task_title}</p>
            ))
          }

          {/* {
            meter_values.map( (meter_value) => (
              
              <meter className="meters flex flex-col gap-20" value={meter_value} min={0} max={100} low={10} high={90} optimum={70}></meter>
            ))
          } */}
           <meter className="meters " value={9} min={0} max={100} low={10} high={90} optimum={50}></meter>
           <meter className="meters " id='meter2' value={30} min={0} max={100} low={10} high={90} optimum={50}></meter>

           <meter className="meters " id='meter3' value={90} min={0} max={100} low={10} high={90} optimum={50}></meter>

           <div className="dividers ">
            <div className='divide'></div>
            <div className='divide'></div>
            <div className='divide'></div>

           </div>

           <div className="todays_progress">
            <p  className="font-sans text-base text-blue-900 font-bold mx-5 my-10 ">Today's Progress</p>
            <div className="chart_remarks ">
            <div className="today_chart">
              <PieChart data={pieData} /> 
            </div>
            <div className="congratulations"> <span className="font-sans text-base text-blue-900 font-semibold"> Congratulations! </span> <br></br>You completed <span className="font-sans text-base text-blue-600 font-bold"> 95% </span> of your tasks</div>
            </div>
            
           </div>



        </div>
      </div>

    
  
  </>
   


   
   

  
  )
}

export default App
