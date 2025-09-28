import  BackImg from '../../assets/images/back.svg'
import  WelcomeImg from '../../assets/images/welcome.png'
import '../../assets/webStyles/about.css'

function AboutContent(){
    return(
        <div className='About-content'>
                <h1 className='Welcome-title'>Bienvenido a SyncEdu</h1>
            <div className='Welcome-content'>
                <img className='Welcome-img' src={WelcomeImg}></img>
            </div>
            <div className='Back-content'>
                <img className='Back-img' src={BackImg}></img>
            </div>
            <div className='Text-content'>
                <p className='Text-about'>
                    La plataforma que transforma la gestión académica en una experiencia 
                    sencilla, moderna y accesible. Con SyncEdu podrás integrar todos tus 
                    procesos en un mismo lugar, mantener el control sin complicaciones 
                    y disfrutar de una gestión académica más ágil, organizada y eficiente.
                </p>
            </div>
            <div className='Back-content-two'>
                <img className='Back-img-two' src={BackImg}></img>
            </div>
        </div>
    );
}
export default AboutContent;