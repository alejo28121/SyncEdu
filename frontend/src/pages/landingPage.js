import '../assets/webStyles/web.css'
import HomeContent from '../components/webCom/home'
import AboutContent from '../components/webCom/about'
import ServiceContent from '../components/webCom/Service'

import { useState, useEffect } from 'react';

function LandingPage(){
    const [scrollState, setScrollState] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            setScrollState(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="Main-content">
            <div className={`Header-content${
                scrollState >= 38 && scrollState <= 558 || scrollState >= 1395 ?
                    '-scrolled'
                : scrollState > 558 && scrollState <= 628 ? 
                    '-two'
                :scrollState > 628 && scrollState <= 1360 ?
                    '-scrolledTwo'
                :
                    ' '
            }`}>
                <div className='Title-content'>
                    <a>
                        <span className='Title'>SYNCEDU</span>
                    </a>
                </div>
                <div id='list-content'>
                    <a>Inicio</a>
                </div>
                <div id='list-content'>
                    <a>Nosotros</a>
                </div>
                <div id='list-content'>
                    <a>Servicios</a>
                </div>
                <div id='list-content'>
                    <a>Contacto</a>
                </div >
                <div id='list-content'>
                    <a>Login</a>
                </div>
            </div>
            <div className='Body'>
                <HomeContent></HomeContent>
                <AboutContent></AboutContent>
                <ServiceContent></ServiceContent>
            </div>
        </div>
    );
};
export default LandingPage;