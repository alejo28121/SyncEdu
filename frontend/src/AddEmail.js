

function AddEmail({setStepValue, setDatesValue}){
    return(
        <div className="Main">
            <div className="mailContente">
                <input className="inputEmail" type="email" placeholder="Correo electronico" onChange={(e) =>
                    setDatesValue(prev => ({
                        ...prev,
                        email: e.target.value
                    }))
                }></input>
            </div>
            <div className="passwordContentC">
                <input className="inputPasswordC" type="password" placeholder="Contraseña" onChange={(e) =>
                    setDatesValue(prev => ({
                        ...prev,
                        password: e.target.value
                    }))
                }></input>
            </div>
            <div className="codeContent">
                <input className="inputCode" type="num" placeholder="Codigo de vinculación" onChange={(e) =>
                    setDatesValue(prev => ({
                        ...prev,
                        vinculationCode: e.target.value
                    }))
                }></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn" onClick={(e) =>{
                    e.preventDefault();
                    setStepValue(3);
                }}>Crear</button>
            </div>
        </div>
    )
}
export default AddEmail;