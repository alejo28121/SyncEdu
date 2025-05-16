

function AddEmail({setValue}){
    return(
        <div className="Main">
            <div className="mailContente">
                <input className="inputEmail" placeholder="Correo electronico"></input>
            </div>
            <div className="passwordContentC">
                <input className="inputPasswordC" placeholder="Contraseña"></input>
            </div>
            <div className="codeContent">
                <input className="inputCode" placeholder="Codigo de vinculación"></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn" onClick={(e) =>{
                    e.preventDefault();
                    setValue(1);
                }}>Crear</button>
            </div>
        </div>
    )
}
export default AddEmail;