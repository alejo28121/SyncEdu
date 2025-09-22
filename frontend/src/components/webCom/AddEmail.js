function AddEmail({setStepValue, setDatesValue}){
    const handleSubmit = (e) => {
        e.preventDefault();
        setStepValue(3)
    }
    return(
        <div className="Main">
            <form onSubmit={handleSubmit}>
                <div className="mailContente">
                    <input className="inputEmail" type="email" placeholder="Correo electronico" onChange={(e) =>
                        setDatesValue(prev => ({
                            ...prev,
                            email: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="passwordContentC">
                    <input className="inputPasswordC" type="password" placeholder="Contraseña" onChange={(e) =>
                        setDatesValue(prev => ({
                            ...prev,
                            password: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="codeContent">
                    <input className="inputCode" type="num" placeholder="Codigo de vinculación" onChange={(e) =>
                        setDatesValue(prev => ({
                            ...prev,
                            vinculationCode: e.target.value
                        }))
                    } required></input>
                </div>
                <div className="buttonContent">
                    <button className="ButtonIn" type="">Crear</button>
                </div>
            </form>
        </div>
    )
}
export default AddEmail;