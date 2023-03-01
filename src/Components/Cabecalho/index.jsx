import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import './Cabecalho.css'

export default function Cabecalho() {
  const [inativo, setInativo] = useState(true)
  const links = [
    {
      link: "/",
      texto: "Início"
    },
    {
      link: "/experiencia",
      texto: "A experiência"
    },
    {
      link: "/setores",
      texto: "Mapa de setores"
    },
    {
      link: "/null",
      texto: "Informações"
    },
    {
      link: "/null",
      texto: "Ingresso"
    }
  ]

  return (
    <header className='cabecalho container'>
        <Logo className="cabecalho__logo" cor="branco"/>
        <nav className='cabecalho__nav'>
          <span 
            onClick={()=> setInativo(!inativo)} 
            className={`material-symbols-outlined cabecalho__nav-icon ${inativo ? "": "cabecalho__nav-icon-ativo"}`}
          >menu</span>
          <ul className={`cabecalho__nav-lista ${inativo? "inativo": ""}`}>
            {links.map(link => {
              return (
                <li className='cabecalho__nav__item' key={link.texto}>
                  <NavLink 
                    onClick={()=> setInativo(!inativo)} 
                    className={({ isActive, isPending })=> isActive ? "link__ativo" : isPending ? "link__pendente" : ""}
                    to={link.link}
                  >{link.texto}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
    </header>
  )
}
