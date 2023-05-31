import React from 'react'
import plus from '../assets/plus.svg'
import { useState } from 'react'

const HomePage = () => {
    
    const [navbar_tasks_array, setNavbar_tasks] = useState([])
    const [body_tasks_array, setBody_tasks] = useState([])
    const [footer_tasks_array, setFooter_tasks] = useState([])
    const [inputText, setInputText] = useState('');
    const [category, setCategory] = useState('')
    let category_array = ['NavBar', 'Body Section', 'Footer']
    let navbar_storage = localStorage.getItem("stored_navbar_array")


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
            localStorage.setItem("stored_navbar_array", navbar_tasks_array);
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


  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Homepage Tasks</p>
        <div className='add_task'>
            <img src={plus} alt="" />
           
            <p>Add Task</p>


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
                            
                            <div className="flex flex-row gap-2 p-3">
                                <input type="checkbox" name="" id=""  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                                 
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :   navbar_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3">
                            <input type="checkbox" name="" id=""  />
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
                            
                            <div className="flex flex-row gap-2 p-3">
                                <input type="checkbox" name="" id=""  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        : body_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3">
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
                            
                            <div className="flex flex-row gap-2 p-3">
                                <input type="checkbox" name="" id=""  />
                                 <p key={index} className="font-sans text-base text-white font-light">{task}</p>
                            {/* <label htmlFor="input">{navbar_task}</label> */}
                            
    
                            </div>
                           
                            
                            
    
                        )
                        :  footer_tasks_array.map( (task, index) => 
                            
                        <div className="flex flex-row gap-2 p-3">
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
                <div className="chart"></div>
            </div>

            

    
    </div>
  )
}

export default HomePage