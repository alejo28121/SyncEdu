import {useEffect, useState} from 'react';
import '../assets/SingIn.css'

function Login({setValue}){
    const [mensaje, setMensaje] = useState(''); 
    useEffect(() => {
        fetch('http://192.168.43.180:5000/login')
        .then(res => res.text())
        .then(data => setMensaje(data))
        .catch(err => console.error(err));
    }, []);
    return( 
        <div className="Main">
            <div className="textUserContent">
                <h2 className='IngresarT'>Ingresar</h2>
            </div>
            <div className="userContent">
                <input className="inputUser" placeholder="Usuario"></input>
            </div>
            <div className="passwordContent">
                <input type='password' className="inputPassword" placeholder="Contraseña"></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn">Ingresar</button>
            </div>
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