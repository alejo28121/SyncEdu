import {useEffect, useState} from 'react';
import '../assets/SingIn.css'

function Login({setValue}){
    const [datesValue, setdatesValue] = useState({
        user: '',
        password: '',
    }); 
    const sendDates = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(datesValue)
        });
    };
    return( 
        <div className="Main">
            <div className="textUserContent">
                <h2 className='IngresarT'>Ingresar</h2>
            </div>
            <form onSubmit={sendDates}>
                <div className="userContent">
                    <input className="inputUser" placeholder="Usuario" onChange={(e) => 
                        setdatesValue(prev => ({
                            ...prev,
                            user: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="passwordContent">
                    <input type='password' className="inputPassword" placeholder="Contraseña" onChange={(e) =>
                        setdatesValue(prev => ({
                            ...prev,
                            password: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="buttonContent">
                    <button className="ButtonIn" type='submit'>Ingresar</button>
                </div>
            </form>
            <div className="createContent">
                <h3 className='questionText'>Aun no tienes cuenta?</h3>
                <a className="CreteAccount" href="#" onClick={(e) => {
                    e.preventDefault();
                    setValue(0); 
                }}>Registrar</a>
            </div>
        </div>
    );
}
export default Login;