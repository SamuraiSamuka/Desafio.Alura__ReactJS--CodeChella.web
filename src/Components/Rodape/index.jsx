import './rodape.css'
import Logo from '../Logo'
import LogoInstagram from '/icons/Instagram.svg'
import LogoTwitch from '/icons/twitch.svg'
import LogoTwiter from '/icons/twiter.svg'
import LogoWhatsapp from '/icons/whatsapp.svg'

export default function Rodape() {
  return (
    <footer className='rodape container'>
        <div className="rodape__divisoria">
            <Logo cor="branco" className="rodape__logo"/>
            <div className="redes-sociais">
                <p>Acesse nossas redes:</p>
                <div className="redes">
                    <ul className='redes__lista'>
                        <li className='redes_icone'><a href="#null"><img src={LogoWhatsapp} alt="" /></a></li>
                        <li className='redes_icone'><a href="#null"><img src={LogoTwitch} alt="" /></a></li>
                        <li className='redes_icone'><a href="#null"><img src={LogoInstagram} alt="" /></a></li>
                        <li className='redes_icone'><a href="#null"><img src={LogoTwiter} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="creditos">
            <p className='creditos__texto'>Desenvolvido por <a href="http://github.com/samuraiSamuka">Samuel Carvalho</a>.</p>
            <p className='creditos__texto'>Projeto fictício sem fins comerciais.</p>
        </div>
    </footer>
  )
}
