import './rodape.css'
import Logo from '../Logo'
import { FaInstagram, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa'

export default function Rodape() {
  return (
    <footer className='rodape container'>
        <div className="rodape__divisoria">
            <Logo cor="branco" className="rodape__logo"/>
            <div className="redes-sociais">
                <p>Acesse nossas redes:</p>
                <div className="redes">
                    <ul className='redes__lista'>
                        <li className='redes_icone'><a href="#null"><FaWhatsapp /></a></li>
                        <li className='redes_icone'><a href="#null"><FaTwitch /></a></li>
                        <li className='redes_icone'><a href="#null"><FaInstagram/></a></li>
                        <li className='redes_icone'><a href="#null"><FaTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="creditos">
            <p className='creditos__texto'>Desenvolvido por <a href="https://www.linkedin.com/in/samuel-silva-de-carvalho/">Samuel Carvalho</a>.</p>
            <p className='creditos__texto'>Projeto fictício sem fins comerciais.</p>
        </div>
    </footer>
  )
}
