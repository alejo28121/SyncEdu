import Bgimg from '../../assets/images/slider-img.png'
import BgMobile from '../../assets/images/hero-bg-mobile.png'
import '../../assets/webStyles/home.css'

function HomeContent(){
    return(
        <div className='Home-content'>
            <div className='Left-content'>
                <div className="Presentation-one">
                    <h1 className='Title-one'>Simplificamos la gestión</h1>
                    <p className='Text-one'>Con SyncEdu centralizas procesos académicos y
                        administrativos en una sola plataforma intuitiva. Ahorra
                        tiempo, reduce errores y mantén todo organizado de
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
    );
}
export default HomeContent;