

function AddName({setStepValue}){
    return(
        <div className="Main">
            <div className="nameContent">
                <input className="inputName" placeholder="Nombre"></input>
            </div>
            <div className="lastNameContent">
                <input className="inputLasName" placeholder="Apellido"></input>
            </div>
            <div className="buttonContent">
                <button className="ButtonIn" onClick={(e) => {
                    e.preventDefault();
                    setStepValue(0);
                }}>Siguiente</button>
            </div>
        </div>
    )
}
export default AddName;