function AddName({setStepValue, setDatesValue}){
    const handleSubmit = (e) => {
        e.preventDefault();
        setStepValue(2);
    }
    return(
        <div className="Main">
            <form onSubmit={handleSubmit}> 
                <div className="nameContent">
                    <input className="inputName" placeholder="Nombre" onChange={(e) =>
                        setDatesValue(prev => ({
                            ...prev,
                            name: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="lastNameContent">
                    <input className="inputLasName" placeholder="Apellido" onChange={(e) =>
                        setDatesValue(prev => ({
                            ...prev,
                            lastName: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="buttonContent">
                    <button className="ButtonIn" type="submit">Siguiente</button>
                </div>
            </form>
        </div>
    )
}
export default AddName;