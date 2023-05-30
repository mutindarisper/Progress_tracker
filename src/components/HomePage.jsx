import React from 'react'
import plus from '../assets/plus.svg'

const HomePage = () => {
  return (
    <div className='homepage'>

        <div className="header"> 

        <p className="home_tasks font-sans text-base text-blue-900 font-bold">Homepage Tasks</p>
        <div className='add_task'>
            <img src={plus} alt="" />
            <p>Add Task</p>
          
        </div>
        
        <select name="" id="homepage_selections">
                <option value="">NavBar</option>
                <option value="">NavBar</option>
                <option value="">NavBar</option>
            </select>
            
            
            </div>
            <div className="cards">
            
            <div className="navbar_card">
                <p className="font-sans text-base text-blue-900 font-semibold mx-10 my-6">Navbar</p>

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