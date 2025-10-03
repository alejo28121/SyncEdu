import '../../assets/webStyles/service.css'
import Form from '../../components/webCom/form'
import { useState } from 'react'

function ServiceContent(){
    const [formState, setFormState] = useState(false);
    return(
        <div className="Service-content">
            <div className='Left-contentT' id='services'>
                <div className='Text-contentS'>
                    <h1 className="Service-title">Servicios en construcción</h1>
                    <p className="Service-text">
                        En SyncEdu estamos diseñando las herramientas que mejor se adapten a las 
                        necesidades de la comunidad académica. 
                        Por eso queremos saber tu opinión.
                    </p>
                    <div className="Survey-content">
                        <button className="btn-form" onClick={() => {
                            setFormState(!formState);
                        }}>Compartir mi idea</button>
                    </div>
                </div>
            </div>
            <div className="Right-twoT" style={formState ? {display : "flex"} : {display : "none"}}>
                <Form></Form>
            </div>
        </div>
    );
}
export default ServiceContent;