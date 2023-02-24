import LogoBranco from '/Logo-branco.svg'
import LogoPreto from '/Logo-preto.svg'

export default function Logo({cor, className}) {
  return (
    <img className={className} src={cor === "branco"? LogoBranco : LogoPreto} alt="" />
  )
}
