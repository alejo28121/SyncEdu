import './CreateUser.css'

function CreateUser(){
    return(
        <div className="MainC">
            <div className="textUserContentC">
                <h2 className='createAccount'>Crear Usuario</h2>
            </div>
            <div className="nameContent">
                <input className="inputName" placeholder="Nombre"></input>
            </div>
            <div className="lastNameContent">
                <input className="inputLasName" placeholder="Apellido"></input>
            </div>
            <div className="codeContent">
                <input className="inputCode" placeholder="Codigo de vinculación"></input>
            </div>
            <div className="passwordContentC">
                <input className="inputPasswordC" placeholder="Contraseña"></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn">Crear</button>
            </div>
        </div>
    );
}
export default CreateUser;