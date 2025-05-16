import { useState } from 'react';
import './CreateUser.css'
import AddName from './CreateName';
import AddEmail  from './AddEmail';

function CreateUser({setValue}){
    const [stepValue, setStepValue] = useState (1);
    if (stepValue === 1){
        return(
            <div className="MainC">
                <div className="textUserContentC">
                    <h2 className='createAccount'>Crear Usuario</h2>
                </div>
                <AddName setStepValue={setStepValue}/>
            </div>
        );
    }else{
        return(
            <div className="MainC">
                <div className="textUserContentC">
                    <h2 className='createAccount'>Crear Usuario</h2>
                </div>
                <AddEmail setValue={setValue}/>
            </div>
        )
    }
}
export default CreateUser;