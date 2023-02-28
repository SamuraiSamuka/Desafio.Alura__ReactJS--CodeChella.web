import { Link } from 'react-router-dom'
import LogoBranco from '/Logo-branco.svg'
import LogoPreto from '/Logo-preto.svg'

export default function Logo({cor, className}) {
  return (
    <Link to="/"><img className={className} src={cor === "branco"? LogoBranco : LogoPreto} alt="" /></Link>
  )
}
