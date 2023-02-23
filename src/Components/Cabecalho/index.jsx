import './Header.css'
import LogoBranco from '/Logo-branco.svg'

export default function Cabecalho() {
  return (
    <header>
        <img className='header__logo' src={LogoBranco} alt="" />
        <nav className='header__nav'>
          <span class="material-symbols-outlined header__nav-icon">menu</span>
          <ul className='header__nav-lista'>
              <li><a href="">A experiência</a></li>
              <li><a href="">Mapa de setores</a></li>
              <li><a href="">Informações</a></li>
              <li><a href="">Ingresso</a></li>
          </ul>
        </nav>
    </header>
  )
}
