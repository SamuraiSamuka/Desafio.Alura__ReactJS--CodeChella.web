import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Cabecalho.css'

export default function Cabecalho() {
  const [inativo, setInativo] = useState(true)

  return (
    <header className='cabecalho container'>
        <Logo className="cabecalho__logo" cor="branco"/>
        <nav className='cabecalho__nav'>
          <span onClick={()=> setInativo(!inativo)} className={`material-symbols-outlined cabecalho__nav-icon`}>menu</span>
          <ul className={`cabecalho__nav-lista ${inativo? "inativo": ""}`}>
              <li className='cabecalho__nav__item'><Link to="/Experiencia">A experiência</Link></li>  <hr />
              <li className='cabecalho__nav__item'><Link to="#null">Mapa de setores</Link></li>  <hr />
              <li className='cabecalho__nav__item'><Link to="#null">Informações</Link></li>  <hr />
              <li className='cabecalho__nav__item'><Link to="#null">Ingresso</Link></li>
          </ul>
        </nav>
    </header>
  )
}
