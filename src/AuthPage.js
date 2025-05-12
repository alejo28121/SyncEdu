import LoginLeft from './MessageLogin'
import Login from './SingIn.js'
import './AuthPage.css';
import CreateUser from './CreateUser';

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
                <CreateUser/>
            </div>
        );
    }
}
export default RenderAuth;