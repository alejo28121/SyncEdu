import LoginLeft from '../components/MessageLogin.js'
import '../assets/AuthPage.css';
import { Outlet } from 'react-router-dom';

function RenderAuth (){
    return(
        <div className='MainContent-Auth'>
            <LoginLeft/> 
            <Outlet/>
        </div>
    );
}
export default RenderAuth;