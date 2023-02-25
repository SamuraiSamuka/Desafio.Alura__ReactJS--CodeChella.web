import './LineUp.css'
import LineDay from '../LineDay'

export default function LineUp() {
  return (
    <div className="LineUp">
        <h1 className='LineUp__titulo'>/Line-Up/</h1>
        <LineDay 
            titulo="SÁBADO <11/03>"
            destaque="System of a DOM"
            atracoesB={["Python Maiden", "Apollo Client 2001", "Bon Java", "NickCallBack"]}
            atracoesC={["LinkinPromises", "Fullstack Fighters", "Papa React", "Angular in Chains"]}
            atracoesD={["Agnostic Front-end", "SlipkNode", "Pink Flutter", "Kiss"]}
        />
        <LineDay 
            titulo="DOMINGO <12/03>"
            destaque="Lana Del Ploy"
            atracoesB={["Dua Lib", "The Backnd", "CSS Styles", "DJ Query", "ArrayAna Grande"]}
            atracoesC={["Miley Cypress", "The Bootstrap Boys", "Json Derulo", "CloudPlay", "Dev Lovato"]}
            atracoesD={["Kylie MiLOG", "Jenkins Brothers", "Rubycat Dolls"]}
        />
    </div>
  )
}
