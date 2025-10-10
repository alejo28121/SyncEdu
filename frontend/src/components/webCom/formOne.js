import '../../assets/webStyles/form.css'

function formOne(){
    return(
        <div className='Content'>
            <div className='Title-content-form'>
                <h1>Comparte tus ideas</h1>
            </div>
            <div className='Name-content'>
                <input className='Input-name' placeholder='Nombre' required></input>
            </div>
            <div className='Email-content'>
                <input className='Input-email' placeholder='Correo electronico' required></input>
            </div>
            <div className='Rol-content'>
                <input className='Input-rol' list='Roles' placeholder='Selecciona tu rol:' required></input>
                <datalist id='Roles'>
                    <option value="Estudiante"></option>
                    <option value="Docente"></option>
                    <option value="Director"></option>
                    <option value="Uso personal"></option>
                </datalist>
            </div>
        </div>
    );
}
export default formOne;