import { useState } from 'react'
import Logo from './assets/Grouplogo_avant.svg'
import search from './assets/search.svg'
import girl from './assets/girl.png'
import dashboard from "./assets/dashboard.svg"
import homepage from "./assets/homepage.svg"
import report from "./assets/report.svg"
import training from "./assets/training.svg"
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)



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

  return (
   
<>
    <div className="sidenav ">
   
      <img className='logo -mx-1 my-10' src={Logo} alt="" />
      <div className="links flex flex-col gap-20	text-white p-12 cursor-pointer">
        {links.map((link) => (
           <p>{link}</p>
        ))}
      </div>

      <div className="link_icons">

      </div>

      <div className="link_icons flex flex-col gap-20 p-12">
        {
          link_icons.map( (icon) => 
          <img className='icons cursor-pointer' src={icon}></img>)
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

      <div className="your_activity absolute ">
        <p className="font-sans text-lg text-blue-900 font-bold mx-10 my-10 ">Your Activity</p>
        <div className="doughnut_chart">

        </div>

      </div>


      <div className="your_activity_2 absolute ">
        <p className="font-sans text-lg text-white font-bold mx-10 my-10 ">Your Activity</p>
        <div className="doughnut_chart">

        </div>

      </div>
      <div className="minicharts">
        <div className="homepage_chart ">
          <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">HomePage</div>
        </div>
        <div className="dashboard_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Dashboard</div>
        </div>
        <div className="report_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Progress Report</div>
        </div>
        <div className="training_chart">
        <div className="home_chart_title font-sans text-lg text-white font-semibold my-8 mx-12">Training</div>
        </div>


        <div className=" minichart_icons cursor-pointer">
        
         
          <img className='homepage_icon' id='home_id' src={homepage} />
          <img className='homepage_icon' id='dash_id' src={dashboard} />
          <img className='homepage_icon' id='report_id' src={report} />
          <img className='homepage_icon' id='training_id' src={training} />
        
       
      </div>
      </div>

      <div className="profile_section bg-green-200">
        <p className='mx-10 my-16 text-2xl font-bold text-blue-900'>My Profile</p>
        <img className="mx-24 my-16  bg-slate-400" src="" alt="" />
        <p className='text-xl font-bold text-blue-900 mx-32'>Risper Mutinda</p>
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



        </div>
      </div>

    
  
</>
   
  
  )
}

export default App
