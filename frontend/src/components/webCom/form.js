import '../../assets/webStyles/form.css'
import FormIdeasM from '../webCom/formPresetation.js';
import FormOne from '../webCom/formOne.js'
import { useEffect, useState } from 'react';

function FormIdeas(){
    const [stepForm, setStepForm] = useState(1);
    const [pointValues, setPointsValues] = useState(1);
    const [ideasValue, setIdeasValue] = useState({
        name : '',
        email : '',
        rol : '',
    });
    function ComponentReturn(){
        if(stepForm === 1){
            return(
                <FormOne></FormOne>
            )
        }else if(stepForm === 2){
            return(
                <FormIdeasM></FormIdeasM>
            )
        }
    }
    return(
        <div className='Form-content'>
            {ComponentReturn()}
            <div className='Buttons-content'>
                <div className='Button-contentB'  style={stepForm === 1 ? {display : 'none'} : {display : 'flex'}}>
                    <button className='Buttons' onClick={() => {
                        setStepForm(stepForm - 1);
                    }}>Anterior</button>
                </div>
                <div className='Button-content'>
                    <button className='Buttons' onClick={() => {
                        setStepForm(stepForm + 1);
                    }}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}
export default FormIdeas;