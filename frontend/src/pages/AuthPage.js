import LoginLeft from '../components/MessageLogin.js'
import Login from '../components/SingIn.js'
import '../assets/AuthPage.css';
import CreateUser from '../components/CreateUser.js';

function RenderAuth ({value, setValue}){
    if (value === 1){
        return(
            <div className='MainContent'>
                <LoginLeft/> 
                <Login setValue={setValue}/>
            </div>
        );
    }else{
        return(
            <div className='MainContent'>
                <LoginLeft/> 
                <CreateUser setValue={setValue}/>
            </div>
        );
    }
}
export default RenderAuth;