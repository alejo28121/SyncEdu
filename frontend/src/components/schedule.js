import '../assets/schedule.css';
import {jwtDecode} from 'jwt-decode';
import {useEffect, useState} from 'react';

function Schedule (){
    const dates = jwtDecode(localStorage.getItem('token'));
    const code = dates.institution;
    const [scheduleDate, setScheduleData] = useState([]);
    const initialCells = 73;
    useEffect(() => {
            const requestSchedule = async () => {
            try{
                const response = await fetch('http://localhost:5000/schedule', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify({
                        type: '1',
                        grade: 'uni',
                        code: 'SCHL04',
                    })
                });
                if(response.status === 200){
                    const schedule = await response.json();
                    console.log(schedule);
                    setScheduleData(schedule);
                }else{
                    console.log('codigo invalido');
                }
            }
            catch(error){
                console.error("error en la solicitud: ", error);
            }
        };
        requestSchedule();
    }, [code]);
    const total = scheduleDate.reduce((counter, hour) => counter + parseInt(hour.duration, 10), 0);
    const counterCells = initialCells - total;
    const colors = ["#fdb15a", "#ff67c9", "#00c6c3", "#7b88f2", "#3dd99b", "#ff8984", "#b881f8"];
    let useSubjects = [];
    function SearchSubject(subject){
        const index = useSubjects.indexOf(subject);
        if(index >= 0){
            return colors[index];
        }
        else{
            useSubjects.push(subject);
            return colors[useSubjects.length - 1];
        }
    };
    return(
        <div className='Schedule-container'>
            <div className='Main-hour-container'>
                <div className='Left-hour-container'>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>7:00</span>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>9:00</span>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>11:00</span>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>13:00</span>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>15:00</span>
                    <span className='Span-hour'></span>
                    <span className='Span-hour'>17:00</span>
                    <span className='Span-hour'></span>
                </div>
                <div className='Top-hour-container'>
                    <span>Lunes</span>
                    <span>Martes</span>
                    <span>Miercoles</span>
                    <span>Jueves</span>
                    <span>Viernes</span>
                    <span>Sabado</span>
                </div>
                {scheduleDate.map((hour, index) => {
                    const getGridRowFromTime = (time) => {
                        const baseHour = 6; 
                        const hour = parseInt(time.split(":")[0], 10);
                        return hour - baseHour + 2;
                    };
                    const weekDays = {
                        Lunes: 2,
                        Martes: 3,
                        Miercoles: 4,
                        Jueves: 5,
                        Viernes: 6,
                        Sabado: 7,
                    };
                    return(
                        <div key={index} className='Hour-container1' style={{
                                gridColumn: `${weekDays[hour.weekDay]} / span 1`,
                                gridRow: `${getGridRowFromTime(hour.startDayTime)} / span ${parseInt(hour.duration, 10)}`,
                                backgroundColor: SearchSubject(hour.Subject)
                            }}>
                            <span className='text-dates-subject'>{hour.Subject}</span>
                            <span className='text-dates-hour'>{hour.startDayTime.slice(0, 5)}-{hour.endDayTime.slice(0,5)}</span>
                        </div>
                    )
                })}
                {Array.from({length: counterCells}).map((_, i) => {
                    return <div key={i} className='Hour-container'></div>
                })}
            </div>
        </div>
    );
}
export default Schedule;