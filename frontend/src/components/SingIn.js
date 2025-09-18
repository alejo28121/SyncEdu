import {useState} from 'react';
import '../assets/SingIn.css';
import {Link, useNavigate} from 'react-router-dom';
import visivilityOffIcon from '../assets/visibility_off.svg';
import visivilityIcon from'../assets/visibility.svg';

function Login(){
    const [datesValue, setdatesValue] = useState({
        user: '',
        password: '',
    }); 
    const navigate = useNavigate();
    const [visibilityValue, setvisibilityValue] = useState(true); 
    const sendDates = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(datesValue)
            });
            if(response.status === 200){
                const data = await response.json();
                localStorage.setItem('token', data);
                navigate('/dashboard');
            }else{
                console.log("usuario invalido");
            }
        }
        catch(error){
            console.error("error en la solicitud: ", error);
        }
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
                    <input type={visibilityValue ? "password":"text"} className="inputPassword" id="inputPassword" placeholder="Contraseña" onChange={(e) =>
                        setdatesValue(prev => ({
                            ...prev,
                            password: e.target.value
                        }))
                    } required></input>
                    <button className='viewPassword' type='button' onClick={(e) => {
                        setvisibilityValue(prev => !prev)
                    }}><img id='visibilityIcon' src={visibilityValue ? visivilityIcon:visivilityOffIcon} alt='Ver contraseña'/></button>
                </div>
                <div className="buttonContent">
                    <button className="ButtonIn" type='submit'>Ingresar</button>
                </div>
            </form>
            <div className="createContent">
                <h3 className='questionText'>Aun no tienes cuenta?</h3>
                <Link className="CreteAccount" to="/Auth/Register">Registrar</Link>
            </div>
        </div>
    );
}
export default Login;