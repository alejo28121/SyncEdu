import '../assets/webStyles/web.css'
import BgMobile from '../assets/images/hero-bg-mobile.png'
import Bgimg from '../assets/images/slider-img.png'
import  WelcomeImg from '../assets/images/welcome.png'
import { useState, useEffect } from 'react';

function LandingPage(){
    const [scrollState, setScrollState] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            setScrollState(window.scrollY > 35);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="Main-content">
            <div className={`Header-content${scrollState ? '-scrolled' : ''}`}>
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
                <div className='Home-content'>
                    <div className='Left-content'>
                        <div className="Presentation-one">
                            <h1>Simplificamos la gestión</h1>
                            <p>Con SyncEdu centralizas procesos académicos y<br></br>
                                administrativos en una sola plataforma intuitiva. Ahorra<br></br>
                                tiempo, reduce errores y mantén todo organizado de<br></br>
                                manera sencilla y eficiente.</p>
                            <div className="Btn-content">
                                <a href="" className="btn-one">Leer mas</a>
                            </div>
                        </div>
                        <div className="Presentation-two">
                            <h1>Potenciamos la educación</h1>
                            <p>Al facilitar la gestión, docentes y estudiantes pueden enfocarse en lo que realmente importa: enseñar, aprender y crecer. SyncEdu impulsa la calidad educativa al conectar a toda la comunidad académica.</p>
                            <div className="btn-box">
                                <a href="" className="btn-1">Leer mas</a>
                            </div>
                        </div>
                    </div>
                    <div className='Right-content'>
                        <img src={BgMobile} className='Bgmobile'></img>
                        <img src={Bgimg} className='BgImg'></img>
                    </div>
                </div>
                <div className='About-content'>
                    <h1 className='Welcome-title'>Bienvenido a SyncEdu</h1>
                    <div className='Welcome-content'>
                        <img className='Welcome-img' src={WelcomeImg}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;