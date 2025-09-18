import {jwtDecode} from 'jwt-decode';
import '../assets/Dashboard.css';
import search from '../assets/search.svg';
import scheduleIcon from '../assets/Schedule_sidebar.svg';
import ligth from '../assets/light_mode.svg';
import toDoIcon from '../assets/To-do-list.svg';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Dashboard(){
    const dates = jwtDecode(localStorage.getItem('token'));
    const nameLetters = dates.name[0] + dates.lastName[0];
    console.log(dates);
    const [scrollState, setScrollState] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndicator, setActiveIndicator] = useState(0);
    const [indicatorTop, setIndicatorTop] = useState(10);
    const [colorIndicator, setColorIndicator] = useState(["trasparent", "trasparent"]);
    const navigate = useNavigate();
    
    useEffect ( () => {
        let diference = Math.abs(activeIndicator - activeTab);
        const colorsOne = ["#000028", "#111c44"];
        const colorsInv = ["trasparent", "trasparent"];
        setIndicatorTop(prevTop => {
            if(activeTab < activeIndicator){
                return(prevTop - (5 * diference));
            }
            else{
                return(prevTop + (5 * diference));
            }
        });
        setActiveIndicator(activeTab);
        if(activeTab === 0){
            setColorIndicator(colorsInv);
        }else{
            setColorIndicator(colorsOne);
        }
    }, [activeTab]);
    return(
        <div className='Main-container-dashboard'>
            <div className='Container-sidebar'>
                <div className='Name-container'><span className='Name-span'>SyncEdu</span></div>
                <div className='Side-components-container' style={{
                    
                }}>
                    <div key={activeTab} className='Select-component'>
                        <div className='Upper-select'></div>
                        <div className='Medium-select'></div>
                        <div className='Low-select'></div>
                    </div>
                    <div className='Schedule-access' onClick={() => {
                        setActiveTab(1);
                        navigate('/Dashboard/Schedule');
                        }
                    }>
                        <img className='Schedule-icon' src={scheduleIcon}></img>
                        <a className='Schedule-text'>Horario</a>
                    </div>
                    <div className='Task-access' onClick={() => {
                        setActiveTab(2);
                        navigate('/Dashboard/Task');
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
                <style>
                    {`
                        @keyframes size{
                            from{
                                width: 0vw;
                            }to{
                                width: 12vw;
                            }
                        }
                        .Select-component{
                            top: ${indicatorTop}vh;
                            animation: size 0.5s forwards;
                            background-color: ${colorIndicator[0]};
                        }
                        .Upper-select{
                            animation: size 0.5s forwards;
                            background-color: ${colorIndicator[1]};
                        }
                        .Medium-select{
                            box-shadow: -3vh 0 0 1vh ${colorIndicator[1]};
                            animation: size 0.5s forwards;
                            background-color: ${colorIndicator[0]};
                        }
                        .Low-select{
                            animation: size 0.5s forwards;
                            background-color: ${colorIndicator[1]};
                        }
                    `}
                </style>
            </div>
        </div>
    );
};
export default Dashboard;