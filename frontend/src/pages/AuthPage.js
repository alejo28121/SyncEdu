import LoginLeft from '../components/MessageLogin.js'
import Login from '../components/SingIn.js'
import '../assets/AuthPage.css';
import CreateUser from '../components/CreateUser.js';
import { Outlet } from 'react-router-dom';

function RenderAuth (){
    return(
        <div className='MainContent'>
            <LoginLeft/> 
            <Outlet/>
        </div>
    );
}
export default RenderAuth;