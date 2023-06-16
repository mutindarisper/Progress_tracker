import React from 'react'

import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import plus from '../assets/plus.svg'
import PieChart from './charts/PieChart'
import $ from "jquery";
import { selectAllScores } from './scores/scoreSlice';
import { changehomepageMeanScore } from './scores/scoreSlice';

const HomePage = () => {
    const dispatch = useDispatch()
    
    const [navbar_tasks_array, setNavbar_tasks] = useState([])
    const [body_tasks_array, setBody_tasks] = useState([])
    const [footer_tasks_array, setFooter_tasks] = useState([])
    const [inputText, setInputText] = useState('');
    const [category, setCategory] = useState('')
    let category_array = ['NavBar', 'Body Section', 'Footer']
    const [navbar_checked_count, setNavbar_checked_count] = useState()
    const [totalNavbarTasks, setTotalNavbarTasks] = useState()
    
    const [body_checked_count, setBody_checked_count] = useState()
    const [totalBodyTasks, setTotalBodyTasks] = useState()
    
    const [footer_checked_count, setFooter_checked_count] = useState()
    const [totalFooterTasks, setTotalFooterTasks] = useState()

    const [meanScore, setMeanScore] = useState()
    
    // let navbar_storage = localStorage.getItem("stored_navbar_array")
    
    const scoreselections = useSelector(selectAllScores)
    const scoreSlice = useSelector((state => state.scoreselections)) //return the entire wetland slice



    const pieData = {
        labels: category_array,
        datasets: [
          {
            label: 'Completed',
            data: [navbar_checked_count, body_checked_count, footer_checked_count],
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
        if(category === 'NavBar') {
            setNavbar_tasks([...navbar_tasks_array, newTask ])
            // localStorage.setItem("stored_navbar_array", navbar_tasks_array);
            console.log( 'navbar array',navbar_tasks_array)
        }
        if(category === 'Body Section') {
            setBody_tasks([...body_tasks_array, newTask ])
            console.log( 'body_tasks_array',body_tasks_array)

        }
        if(category === 'Footer') {
            setFooter_tasks([...footer_tasks_array, newTask ])
            console.log( 'footer_tasks_array',footer_tasks_array)
            
        }
           
       

    }
 
}

const getTaskCategory = (e) => {
    // console.log('selection', e.target.value)
    const selected_category = e.target.value
    console.log(selected_category, 'selected category')
     setCategory(selected_category)
     
    //  setNavbar_tasks([])
}
const getChecked = () => {
   
    if(category === 'NavBar') {
        var checkbox = document.getElementById("navbar_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=nav_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',navbar_tasks_array.length)
            var total_nav_tasks = navbar_tasks_array.length
            setTotalNavbarTasks(total_nav_tasks)
    
            var percent = ((box_count/total_nav_tasks) * 100).toFixed(2)
            setNavbar_checked_count(percent)
        }

    }

    if(category === 'Body Section') {
        var checkbox = document.getElementById("body_section_check")
        if(checkbox.checked == true){
            console.log('i am checked')
            var $boxes = $('input[name=body_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',body_tasks_array.length)
            var total_body_tasks = body_tasks_array.length
            setTotalBodyTasks(total_body_tasks)
    
            var percent = ((box_count/total_body_tasks) * 100).toFixed(2)
            setBody_checked_count(percent)
        }

    }
    if(category === 'Footer') {
        var checkbox = document.getElementById("footer_section_check")
        if(checkbox.checked == true){
            // console.log('i am checked')
            var $boxes = $('input[name=footer_check]:checked');
            var box_count = $boxes.length;
    
            console.log('number checked',box_count)
            console.log('total number of tasks',footer_tasks_array.length)
            var total_footer_tasks = footer_tasks_array.length
            setTotalFooterTasks(total_footer_tasks)
    
            var percent = ((box_count/total_footer_tasks) * 100).toFixed(2)
            setFooter_checked_count(percent)
        }

    }

    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        return sum;
      }
    let mean_array =[navbar_checked_count, body_checked_count,footer_checked_count]
    let numbers = mean_array.map( (item) => parseInt(item))
    console.log(numbers, 'mean array')
    let mean_score = sumArray(numbers)/3
    console.log(mean_score, 'mean score')
    setMeanScore(mean_score)

    //change the value of meanscore in store
    dispatch(changehomepageMeanScore(mean_score))
   
}






  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Homepage Tasks</p>
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
            <div className="cards">
            
            <div className="navbar_card">

                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Navbar</p>
                {
                    category === 'NavBar' ? 
                    
                        navbar_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="nav_check" id="navbar_check" onClick={getChecked} />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                                 
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :   navbar_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox"   />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                             
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }
               
            

            </div>
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Body Section</p>
                {
                    category === 'Body Section' ? 
                    
                        body_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="body_check" id="body_section_check" onClick={getChecked} />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        : body_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                            <input type="checkbox" name="" id=""  />
                             <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                    
                }

            </div>
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Footer</p>
                {
                    category === 'Footer' ? 
                    
                        footer_tasks_array.map( (task, index) => 
                            
                            <div className="flex flex-row gap-2 p-3 -my-6 mx-6">
                                <input type="checkbox" name="footer_check" id="footer_section_check" onClick={getChecked}  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :  footer_tasks_array.map( (task, index) => 
                            
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
                <p className="font-sans text-base font-bold my-20 -mx-24">{scoreSlice.homepageMeanScore ? Math.round(scoreSlice.homepageMeanScore) + '%' : 0 + '%'}</p>
                </div>
                
            </div>



            

    
    </div>
  )
}

export default HomePage