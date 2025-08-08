import {jwtDecode} from 'jwt-decode';
import '../assets/Dashboard.css';
import search from '../assets/search.svg';
import scheduleIcon from '../assets/Schedule_sidebar.svg';
import ligth from '../assets/light_mode.svg';
import { useState } from 'react';
import Schedule from '../components/schedule';

function Dashboard(){
    const dates = jwtDecode(localStorage.getItem('token'));
    const nameLetters = dates.name[0] + dates.lastName[0];
    console.log(dates);
    const [scrollState, setScrollState] = useState(false);
    return(
        <div className='Main-container-dashboard'>
            <div className='Container-sidebar'>
                <div className='Name-container'><span className='Name-span'>SyncEdu</span></div>
                <div className='Side-components-container'>
                    <div className='Schedule-access'>
                        <img className='Schedule-icon' src={scheduleIcon}></img>
                        <a className='Schedule-text'>Horario</a>
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
                    <Schedule/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;