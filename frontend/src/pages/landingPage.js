import '../assets/webStyles/web.css'
import HomeContent from '../components/webCom/home'
import AboutContent from '../components/webCom/about'
import ServiceContent from '../components/webCom/Service'
import MenuIcon from '../assets/icons/menu_la.svg'
import HomeIcon from '../assets/icons/home_icon.svg'
import AboutIcon from '../assets/icons/info_icon.svg'
import ServiceIcon from '../assets/icons/service_icon.svg'
import ContactIcon from '../assets/icons/contacts_icon.svg'
import CloseIcon from '../assets/icons/close_icon.svg'
import LoginIcon from '../assets/icons/login_icon.svg'
import { useState, useEffect } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'


function LandingPage(){
    const [scrollState, setScrollState] = useState(false);
    const [menuState, setMenuState] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            setScrollState(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="Main-content">
            <div className='Header-contentB'>
                <div className='titleB-content'>
                    <a>
                        <span className='Title'>SYNCEDU</span>
                    </a>
                </div>
                <div className='Menu-container'>
                    <img className='Menu-icon' style={menuState ? {zIndex : 600} : {}} src={menuState ? CloseIcon : MenuIcon} onClick={() => {
                        setMenuState(!menuState);
                    }}></img>
                </div>
                <div className={`Menu-containerD${menuState ? 'O' : ''}`}>
                    <div className='Icons-container'>
                        <img className='Burger-icon' src={HomeIcon}></img>
                        <img className='Burger-icon' src={AboutIcon}></img>
                        <img className='Burger-icon' src={ServiceIcon}></img>
                        <img className='Burger-icon' src={ContactIcon}></img>
                        <img className='Burger-icon' src={LoginIcon}></img>
                    </div>
                    <div className='List-containerM'>
                        <div id='list-contentM'>
                            <ScrollLink to="home" smooth={true} offset={-120} duration={500}>Inicio</ScrollLink>
                        </div>
                        <div id='list-contentM'>
                            <ScrollLink to="about" smooth={true} offset={-120} duration={500}>Nosotros</ScrollLink>
                        </div>
                        <div id='list-contentM'>
                            <ScrollLink to="services" smooth={true} offset={-120} duration={500}>Servicios</ScrollLink>
                        </div>
                        <div id='list-contentM'>
                            <a>Contacto</a>
                        </div >
                        <div id='list-contentM'>
                            <a>Login</a>
                        </div>
                    </div>
                </div>
            </div>
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
                    <ScrollLink to="home" smooth={true} offset={-120} duration={500}>Inicio</ScrollLink>
                </div>
                <div id='list-content'>
                    <ScrollLink to="about" smooth={true} offset={-120} duration={500}>Nosotros</ScrollLink>
                </div>
                <div id='list-content'>
                    <ScrollLink to="services" smooth={true} offset={-120} duration={500}>Servicios</ScrollLink>
                </div>
                <div id='list-content'>
                    <ScrollLink>Contacto</ScrollLink>
                </div>
                <div id='list-content'>
                    <RouterLink to='/auth/login' className={`Link-login${
                        scrollState >= 38 && scrollState <= 558 || scrollState >= 1395 ?
                            '-scrolled'
                        : scrollState > 558 && scrollState <= 628 ? 
                            '-two'
                        :scrollState > 628 && scrollState <= 1360 ?
                            '-scrolledTwo'
                        :
                            ' '
                    }`}>Login</RouterLink>
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