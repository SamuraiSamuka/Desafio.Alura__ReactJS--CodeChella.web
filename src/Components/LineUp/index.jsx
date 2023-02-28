import './LineUp.css'
import LineDay from '../LineDay'
import Card from '../Card'
import Botao from '../Botao'

export default function LineUp() {
  return (
    <div className="LineUp">
        <Card
          imagem="https://media.graphassets.com/resize=fit:clip,width:1000,/output=format:webp/ZuI1jUJxSX2OYD7Qfmwr"
          titulo="< 11 e 12 de Março >"
          subtitulo="Aluródromo de São Paulo"
          texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
        ><Botao>Comprar ingresso!</Botao></Card>
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
        <img className='LineUp__imagem-bottom' src="https://s3-alpha-sig.figma.com/img/c755/df05/4a8df6479660a3c52ac82e710a0a4644?Expires=1678665600&Signature=BODt3Xudpu6Z4B7LSvIOEoY6~4alLxtmXxC1KjI-OGMlL0OsJF8D4DFlE41O4jVfysaWmKdR5brkhb6UtBrBbOdob9quMllv5l375xQz3dSJ98n~OgweNoGrunjiHYBiqwEzUL2UAqTGb7HJsBWX4FjT43p9IfWWAGtKmtskqfclkZT~xORN7x9k4FqGHMbpEWXVDoVysAVOaKMqE-W8lbgt8qDe3ygCpERnZnzxg24AnpPqOMmcy0QPEXhanv4B0WHnlxiXtjut3DKSjFb7z1fCdu6GtlF2tvVF6U-Z1DbKPLw6HVMZME3trZuiS6KM-1oNimYxQynsQ~auuQPiPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    </div>
  )
}
