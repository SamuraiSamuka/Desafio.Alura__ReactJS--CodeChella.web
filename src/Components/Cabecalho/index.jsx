import { useState } from 'react'
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
              <li className='cabecalho__nav__item'><a href="">A experiência</a></li>  <hr />
              <li className='cabecalho__nav__item'><a href="">Mapa de setores</a></li>  <hr />
              <li className='cabecalho__nav__item'><a href="">Informações</a></li>  <hr />
              <li className='cabecalho__nav__item'><a href="">Ingresso</a></li>
          </ul>
        </nav>
    </header>
  )
}
