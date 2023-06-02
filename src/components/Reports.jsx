import React from 'react'

import { useState } from 'react'
import plus from '../assets/plus.svg'
import PieChart from './charts/PieChart'
import $ from "jquery";

const Reports = () => {
    
    const [report_tasks_array, setReports_tasks] = useState([])
  

    const [documentation_tasks_array, setDocumentation_tasks] = useState([])
    const [inputText, setInputText] = useState('');
    const [category, setCategory] = useState('')
    let category_array = ['Progress Report', 'Documentation']

    const [report_checked_count, setReport_checked_count] = useState()
    const [totalReportTasks, setTotalReportTasks] = useState()
    
    const [documentation_checked_count, setDocumentation_checked_count] = useState()
    const [totalDocumentationTasks, setTotalDocumentationTasks] = useState()
    
   

    const [meanScore, setMeanScore] = useState()
    
    // let navbar_storage = localStorage.getItem("stored_navbar_array")
    




    const pieData = {
        labels: category_array,
        datasets: [
          {
            label: 'Completed',
            data: [report_checked_count, documentation_checked_count],
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
        if(category === 'Progress Report') {
            setReports_tasks([...report_tasks_array, newTask ])
            // localStorage.setItem("stored_navbar_array", report_tasks_array);
            console.log( 'navbar array',report_tasks_array)
        }
       
        if(category === 'Documentation') {
            setDocumentation_tasks([...documentation_tasks_array, newTask ])
            console.log( 'documentation_tasks_array',documentation_tasks_array)
            
        }
           
       

    }
 
}

const getTaskCategory = (e) => {
    // console.log('selection', e.target.value)
    const selected_category = e.target.value
    console.log(selected_category, 'selected category')
     setCategory(selected_category)
     
    //  setReports_tasks([])
}
const getChecked = () => {
   
    if(category === 'Progress Report') {
        var checkbox = document.getElementById("reports_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=report_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',report_tasks_array.length)
            var total_nav_tasks = report_tasks_array.length
            setTotalReportTasks(total_nav_tasks)
    
            var percent = ((box_count/total_nav_tasks) * 100).toFixed(2)
            setReport_checked_count(percent)
        }

    }

    if(category === 'Documentation') {
        var checkbox = document.getElementById("documentation_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=doc_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',documentation_tasks_array.length)
            var total_body_tasks = documentation_tasks_array.length
            setTotalDocumentationTasks(total_body_tasks)
    
            var percent = ((box_count/total_body_tasks) * 100).toFixed(2)
            setDocumentation_checked_count(percent)
        }

    }
   

    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        return sum;
      }
    let mean_array =[report_checked_count, documentation_checked_count]
    let numbers = mean_array.map( (item) => parseInt(item))
    console.log(numbers, 'mean array')
    let mean_score = sumArray(numbers)/3
    console.log(mean_score, 'mean score')
    setMeanScore(mean_score)
   
}






  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Reports Tasks</p>
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
            <div className="reports_cards">
            
            <div className="report_card">

                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Progress Report</p>
                {
                    category === 'Progress Report' ? 
                    
                        report_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="report_check" id="reports_check" onClick={getChecked} />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                                 
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :   report_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox"   />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                             
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }
               
            

            </div>
           
            <div className="report_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Documentation</p>
                {
                    category === 'Documentation' ? 
                    
                        documentation_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="doc_check" id="documentation_check" onClick={getChecked}  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :  documentation_tasks_array.map( (task, index) => 
                            
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
                <p className="font-sans text-base font-bold my-20 -mx-24">{Math.round(meanScore) + '%'}</p>
                </div>
                
            </div>



            

    
    </div>
  )
}

export default Reports