import '../assets/toDoList.css'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import addIcon from '../assets/add_icon.svg'
import checkIcon from '../assets/check.svg'

const checkItems = ['option 1', 'option 2',];

function ToDoList(){
    const dates = jwtDecode(localStorage.getItem('token'));
    const code = dates.institution;
    const user = dates.user;
    const [checkItemsState, setCheckItemsState] = useState([]);
    const [listData, setListData] = useState([]);
    useEffect(() => {
        setCheckItemsState(new Array(checkItems.length).fill(false));
    }, [checkItems]);
    useEffect(() => {
        const requestList = async () => {
            try{
                const response = await fetch('http://localhost:5000/addtask', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify({
                        code: code,
                        user: user,
                    })
                });
                if(response.status === 200){
                    const list = await response.json();
                    console.log(list);
                    setListData(list);
                }
            }
            catch(error){
                console.log('usuario error en la solicitud');
            }
        };
        requestList();
    }, [code]);
    return(
        <div className='Main-container-list'>
            <div className='List-container'>
                {listData.map((item, index) => {
                    const itemState = listData[index].state;
                    const dateOne = listData[index].dayDate;
                    const charIndex = dateOne.indexOf("T");
                    const dateResult = dateOne.substring(0, charIndex);
                    const title = listData[index].title;
                    const stateColors = {
                        "Pendiente" : "#F93943",
                        "En progreso" : "#fdb15a",
                        "Finalizado" : "#00b76a"
                    };
                    return(
                        <div className='List-item'>
                            <div key={index} className='Check-div' onClick={() => {
                                const newCheck = [... checkItemsState];
                                newCheck[index] = !checkItemsState[index];
                                setCheckItemsState(newCheck);
                            }}>
                                <div className={`Circle-check${checkItemsState[index] ? 'ed' : ' '}`}>
                                    <img className={`img-check${checkItemsState[index] ? 'ed' : ' '}`} src={checkIcon}></img>
                                </div>
                            </div>
                            <div className='Info-task-container'>
                                <span className='Date-span'>{dateResult}</span>
                                <h4 className='Title-task'>{title}</h4>
                            </div>
                            <div className='State-container'>
                                <span className='State-span'>{itemState}</span>
                                <div className='Circle-state' style={{
                                    backgroundColor : stateColors[itemState]
                                }}></div>
                            </div>
                        </div>
                    )
                })}
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