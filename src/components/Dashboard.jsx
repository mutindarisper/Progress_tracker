import React from 'react'

import { useState } from 'react'
import plus from '../assets/plus.svg'
import PieChart from './charts/PieChart'
import $ from "jquery";

const Dashboard = () => {
    
    const [selections_task_array, setSelections_tasks] = useState([])
    const [map_tasks_array, setMap_tasks] = useState([])
    const [statistics_tasks_array, setStatistics_tasks] = useState([])
    const [userManagement_tasks_array, setUserManagement_tasks] = useState([])

    const [inputText, setInputText] = useState('');
    const [category, setCategory] = useState('')
    let category_array = ['Selections', 'Map', 'Statistics', 'User Management']

    const [selections_checked_count, setSelections_checked_count] = useState()
    const [totalSelectionsTasks, setTotalSelectionsTasks] = useState()
    
    const [map_checked_count, setMap_checked_count] = useState()
    const [totalMapTasks, setTotalMapTasks] = useState()
    
    const [statistics_checked_count, setStatistics_checked_count] = useState()
    const [totalStatisticsTasks, setTotalStatisticsTasks] = useState()

    const [user_checked_count, setUser_checked_count] = useState()
    const [totalUserTasks, setTotalUserTasks] = useState()


    const [meanScore, setMeanScore] = useState()
    
    // let navbar_storage = localStorage.getItem("stored_navbar_array")
    




    const pieData = {
        labels: category_array,
        datasets: [
          {
            label: 'Completed',
            data: [selections_checked_count, map_checked_count, statistics_checked_count, user_checked_count],
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

    const taskOptions = category_array.map( selection => (
        <option key={selection} value={selection}>
        {selection}
        </option>
    ))


const getTaskInput = (e) => {
    if(e.key === 'Enter') {
        //    console.log(e.target.value)
           const newTask = e.target.value
        //    navbar_tasks.push(e.target.value)
        //    console.log(navbar_tasks, 'nabvar tasks array')
        setInputText(''); // Clear the input text
        if(category === 'Selections') {
            setSelections_tasks([...selections_task_array, newTask ])
            // localStorage.setItem("stored_navbar_array", selections_task_array);
            console.log( 'navbar array',selections_task_array)
        }
        if(category === 'Map') {
            setMap_tasks([...map_tasks_array, newTask ])
            console.log( 'map_tasks_array',map_tasks_array)

        }
        if(category === 'Statistics') {
            setStatistics_tasks([...statistics_tasks_array, newTask ])
            console.log( 'statistics_tasks_array',statistics_tasks_array)
            
        }

        if(category === 'User Management') {
            setUserManagement_tasks([...userManagement_tasks_array, newTask ])
            console.log( 'user management tasks array',userManagement_tasks_array)
            
        }

        
           
       

    }
 
}

const getTaskCategory = (e) => {
    // console.log('selection', e.target.value)
    const selected_category = e.target.value
    console.log(selected_category, 'selected category')
     setCategory(selected_category)
     
    //  setSelections_tasks([])
}
const getChecked = () => {
   
    if(category === 'Selections') {
        var checkbox = document.getElementById("selection_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=select_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',selections_task_array.length)
            var total_nav_tasks = selections_task_array.length
            setTotalSelectionsTasks(total_nav_tasks)
    
            var percent = ((box_count/total_nav_tasks) * 100).toFixed(2)
            setSelections_checked_count(percent)
        }

    }

    if(category === 'Map') {
        var checkbox = document.getElementById("maps_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=map_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',map_tasks_array.length)
            var total_body_tasks = map_tasks_array.length
            setTotalMapTasks(total_body_tasks)
    
            var percent = ((box_count/total_body_tasks) * 100).toFixed(2)
            setMap_checked_count(percent)
        }

    }
    if(category === 'Statistics') {
        var checkbox = document.getElementById("statistics_check")
        if(checkbox.checked == true){
            // console.log('i am checked')
            var $boxes = $('input[name=stats_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',statistics_tasks_array.length)
            var total_footer_tasks = statistics_tasks_array.length
            setTotalStatisticsTasks(total_footer_tasks)
    
            var percent = ((box_count/total_footer_tasks) * 100).toFixed(2)
            setStatistics_checked_count(percent)
        }

    }

    if(category === 'User Management') {
        var checkbox = document.getElementById("user_management_check")
        if(checkbox.checked == true){
            // console.log('i am checked')
            var $boxes = $('input[name=user_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',userManagement_tasks_array.length)
            var total_footer_tasks = userManagement_tasks_array.length
            setTotalUserTasks(total_footer_tasks)
    
            var percent = ((box_count/total_footer_tasks) * 100).toFixed(2)
            setUser_checked_count(percent)
        }

    }

    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        return sum;
      }
    let mean_array =[selections_checked_count, map_checked_count,statistics_checked_count, user_checked_count]
    let numbers = mean_array.map( (item) => parseInt(item))
    console.log(numbers, 'mean array')
    let mean_score = sumArray(numbers)/3
    console.log(mean_score, 'mean score')
    setMeanScore(mean_score)
   
}






  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Dashboard Tasks</p>
        <div className='add_task'>
            <img src={plus} alt="" />
           
            <p className="font-sans text-base text-blue-900 font-semibold">Add Task</p>


            <select id="homepage_selections" 
            value={category}
            onChange={getTaskCategory} 
            >
                <option value=''></option>
                {taskOptions}
                
                
            </select>

            
        </div>

        

        <input type="text" name="" id="task_input" onKeyDown={getTaskInput} value={inputText}  onChange={(e) => setInputText(e.target.value)} />
        
       
            
            
            </div>
            <div className="dashboard_cards">
            
            <div className="dashboard_card">

                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Selections</p>
                {
                    category === 'Selections' ? 
                    
                        selections_task_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="select_check" id="selection_check" onClick={getChecked} />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                                 
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :   selections_task_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox"   />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                             
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }
               
            

            </div>
            <div className="dashboard_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Map</p>
                {
                    category === 'Map' ? 
                    
                        map_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="map_check" id="maps_check" onClick={getChecked} />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        : map_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox" name="" id=""  />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }

            </div>
            <div className="dashboard_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Statistics</p>
                {
                    category === 'Statistics' ? 
                    
                        statistics_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="stats_check" id="statistics_check" onClick={getChecked}  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :  statistics_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox" name="" id=""  />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }

            </div>

            <div className="dashboard_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">User Management</p>
                {
                    category === 'User Management' ? 
                    
                        userManagement_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="user_check" id="user_management_check" onClick={getChecked}  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :  userManagement_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox" name="" id=""  />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }

            </div>

            </div>

            <div className="complete_rate">
                <p className="font-sans text-base mx-12 my-10 font-bold">Completion rate</p>
                <div className="home_component_chart">
                <PieChart data={pieData}/>
                <p className="font-sans text-base font-bold my-20 -mx-24">{meanScore ? Math.round(meanScore) + '%' : 0 + '%'}</p>
                </div>
                
            </div>



            

    
    </div>
  )
}

export default Dashboard