import '../assets/toDoList.css'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import addIcon from '../assets/add_icon.svg'

function ToDoList(){
    return(
        <div className='Main-container-list'>
            <div className='List-container'>
                <div className='List-item'>
                    <div className='Check-div'></div>
                    <div className='Info-task-container'>
                        <span className='Date-span'>21-08-2025</span>
                        <h4 className='Title-task'>End to-do list</h4>
                    </div>
                    <div className='State-container'>
                        <span className='State-span'>En progreso</span>
                        <div className='Circle-state'></div>
                    </div>
                </div>
            </div>
            <div className='Info-container'>
                <div className='Button-container'>
                    <button className='Button-add'><img className='Add-icon' src={addIcon}></img></button>
                </div>
            </div>
        </div>
    );
}
export default ToDoList;