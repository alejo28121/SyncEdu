import './SingIn.css'

function Login({setValue}){
    return( 
        <div className="Main">
            <div className="textUserContent">
                <h2 className='IngresarT'>Ingresar</h2>
            </div>
            <div className="userContent">
                <input className="inputUser" placeholder="Usuario"></input>
            </div>
            <div className="passwordContent">
                <input className="inputPassword" placeholder="Contraseña"></input>
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