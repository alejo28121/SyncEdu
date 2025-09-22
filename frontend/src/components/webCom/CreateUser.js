import { useEffect, useState } from 'react';
import '../../assets/webStyles/CreateUser.css'
import AddName from '../webCom/CreateName';
import AddEmail  from '../webCom/AddEmail';

function CreateUser(){
    const [stepValue, setStepValue] = useState (1);
    const [datesValue, setDatesValue] = useState ({
        name: '',
        lastName: '',
        email: '',
        vinculationCode: '',
        password: '',
    });
    useEffect(() => {
        if(stepValue === 3){
            fetch(`http://${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/create-user`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(datesValue)
            })
        }
    },
    [stepValue, datesValue]);
    if (stepValue === 1){
        return(
            <div className="MainC">
                <div className="textUserContentC">
                    <h2 className='createAccount'>Crear Usuario</h2>
                </div>
                <AddName setStepValue={setStepValue} setDatesValue={setDatesValue}/>
            </div>
        );
    }else if (stepValue === 2){
        return(
            <div className="MainC">
                <div className="textUserContentC">
                    <h2 className='createAccount'>Crear Usuario</h2>
                </div>
                <AddEmail setStepValue={setStepValue} setDatesValue={setDatesValue}/>
            </div>
        );
    }
}
export default CreateUser;