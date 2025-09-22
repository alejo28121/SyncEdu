import '../../assets/dashboardStyles/addTask.css'

function AddTask(){
    return(
        <div className='Blur-background'>
            <div className='Add-container'>
                <h2>Agregar tarea</h2>
                <div className='Components-container'>
                    <input className='Input-title' placeholder='Titulo'></input>
                    <input className='Input-description' placeholder='Descripcion'></input>
                    <input className='Input-date' placeholder='Fecha' type='date'></input>
                    <input className='Input-time' placeholder='hora' type='time'></input>
                </div>
                <div className='Buttons-container'>
                    <button className='Button-cancel'>Cancelar</button>
                    <button className='Button-accept'>Agregar</button>
                </div>
            </div>
        </div>
    );
}
export default AddTask;