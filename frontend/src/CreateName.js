

function AddName({setStepValue, setDatesValue}){
    return(
        <div className="Main">
            <div className="nameContent">
                <input className="inputName" placeholder="Nombre" onChange={(e) =>
                    setDatesValue(prev => ({
                        ...prev,
                        name: e.target.value
                    }))
                }></input>
            </div>
            <div className="lastNameContent">
                <input className="inputLasName" placeholder="Apellido" onChange={(e) =>
                    setDatesValue(prev => ({
                        ...prev,
                        lastName: e.target.value
                    }))
                }></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn" onClick={(e) => {
                    e.preventDefault();
                    setStepValue(2);
                }}>Siguiente</button>
            </div>
        </div>
    )
}
export default AddName;