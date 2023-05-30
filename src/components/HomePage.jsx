import React from 'react'
import plus from '../assets/plus.svg'
import { useState } from 'react'

const HomePage = () => {
    
    const [navbar_tasks_array, setNavbar_tasks] = useState([])
    // const [inputText, setInputText] = useState('');


const getTaskInput = (e) => {
    if(e.key === 'Enter') {
        //    console.log(e.target.value)
           const newTask = e.target.value
        //    navbar_tasks.push(e.target.value)
        //    console.log(navbar_tasks, 'nabvar tasks array')
        // setInputText(''); // Clear the input text
           setNavbar_tasks([...navbar_tasks_array, newTask ])
           
        //    new_navbar_tasks.push(navbar_tasks)

    }
 
}


  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Homepage Tasks</p>
        <div className='add_task'>
            <img src={plus} alt="" />
           
            <p>Add Task</p>
          
        </div>

        <input type="text" name="" id="task_input" onKeyDown={getTaskInput}  />
        
        {/* <select name="" id="homepage_selections">
                <option value="">NavBar</option>
                <option value="">Body Section</option>
                <option value="">Footer</option>
            </select> */}
            
            
            </div>
            <div className="cards">
            
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Navbar</p>
                { 
                    navbar_tasks_array.map( (task, index) => 
                        
                        <div className="flex flex-row gap-2 p-3">
                            <input type="checkbox" name="" id="" value={inputText} />
                             <p key={index}>{task}</p>
                        {/* <label htmlFor="input">{navbar_task}</label> */}
                        

                        </div>
                       
                        
                        

                    )
                }
            

            </div>
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Body Section</p>

            </div>
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Footer</p>

            </div>

            </div>

            <div className="complete_rate">
                <p className="font-sans text-base mx-12 my-10 font-bold">Completion rate</p>
                <div className="chart"></div>
            </div>

            

    
    </div>
  )
}

export default HomePage