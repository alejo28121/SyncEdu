import LoginLeft from '../components/webCom/MessageLogin.js'
import '../assets/webStyles/AuthPage.css';
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