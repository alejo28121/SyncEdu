import '../../assets/webStyles/form.css'

function FormIdeas(){
    return(
        <div className='Form-content'>
            <div className='Title-content-form'>
                <h1>Comparte tus ideas</h1>
            </div>
            <div className='Name-content'>
                <input className='Input-name' placeholder='Nombre'></input>
            </div>
            <div className='Email-content'>
                <input className='Input-email' placeholder='Correo electronico'></input>
            </div>
            <div className='Rol-content'>
                <input className='Input-rol' list='Roles' placeholder='Selecciona tu rol:'></input>
                <datalist id='Roles'>
                    <option value="Estudiante"></option>
                    <option value="Docente"></option>
                    <option value="Director"></option>
                </datalist>
            </div>
            <div className='Button-content'>
                <button className='Button-next'>Siguiente</button>
            </div>
        </div>
    );
}
export default FormIdeas;