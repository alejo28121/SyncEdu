import {jwtDecode} from 'jwt-decode';
import '../assets/Dashboard.css';
import search from '../assets/search.svg';
import scheduleIcon from '../assets/Schedule_sidebar.svg';
import ligth from '../assets/light_mode.svg';
import toDoIcon from '../assets/To-do-list.svg';
import { useState } from 'react';
import Schedule from '../components/schedule';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function Dashboard(){
    const dates = jwtDecode(localStorage.getItem('token'));
    const nameLetters = dates.name[0] + dates.lastName[0];
    console.log(dates);
    const [scrollState, setScrollState] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    return(
        <div className='Main-container-dashboard'>
            <div className='Container-sidebar'>
                <div className='Name-container'><span className='Name-span'>SyncEdu</span></div>
                <div className='Side-components-container'>
                    <div className='Select-component'>
                        <div className='Upper-select'></div>
                        <div className='Medium-select'></div>
                        <div className='Low-select'></div>
                    </div>
                    <div className='Schedule-access' onClick={() => {
                        navigate('/Dashboard/Schedule');
                        }
                    }>
                        <img className='Schedule-icon' src={scheduleIcon}></img>
                        <a className='Schedule-text'>Horario</a>
                    </div>
                    <div className='Task-access' onClick={() => {
                        navigate('/Dashboard/Schedule');
                        }
                    }>
                        <img className='Task-icon' src={toDoIcon}></img>
                        <a className='Task-text'>Tareas</a>
                    </div>
                </div>
            </div>
            <div className='Main-container-sidebar'>
                <div className={`Container-navbar${scrollState ? '-scrolled' : ' '}`}>
                    <div className='Header-text-container'>
                        <a>routes</a>
                        <a>SyncEdu</a>
                    </div>
                    <div className='Container-components'>
                        <img src={search} className='Icon-search'></img>
                        <input className='Input-search' placeholder='Search...'></input>
                        <img src={ligth} className='Icon-ligth'></img>
                        <div className='Circle-user'>
                            <spam>{nameLetters}</spam>
                        </div>
                    </div>
                </div>
                <div className='Container-tools' onScroll={(e) => {
                    setScrollState(e.target.scrollTop > 36);
                }}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;