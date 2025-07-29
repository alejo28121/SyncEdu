import {jwtDecode} from 'jwt-decode';
import '../assets/Dashboard.css';
import search from '../assets/search.svg';
import ligth from '../assets/light_mode.svg';
import { useState } from 'react';

function Dashboard(){
    const dates = jwtDecode(localStorage.getItem('token'));
    console.log(dates);
    const [scrollState, setScrollState] = useState(false);
    return(
        <div className='Main-container-dashboard'>
            <div className='Container-sidebar'>
                <nav>
                </nav>
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
                        <div className='Circle-user'></div>
                    </div>
                </div>
                <div className='Container-tools' onScroll={(e) => {
                    setScrollState(e.target.scrollTop > 36);
                }}>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='Test-div'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;