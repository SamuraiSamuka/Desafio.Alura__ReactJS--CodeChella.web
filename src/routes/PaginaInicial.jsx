import '../reset.css'
import '../index.css'
import Banner from '../Components/Banner'
import LineUp from '../Components/LineUp'
import Card from '../Components/Card'
import Botao from '../Components/Botao'

export function PaginaInicial() {
  return(
    <>
    <Banner 
      imagemDeFundo={'/Imagens/aurora-boreal.jpg'}
      className="opaco"
    >Boas vindas ao <br />#CodeChella2023!</Banner>
    <Card
      imagem="https://media.graphassets.com/resize=fit:clip,width:1000,/output=format:webp/ZuI1jUJxSX2OYD7Qfmwr"
      titulo="< 11 e 12 de Março >"
      subtitulo="Aluródromo de São Paulo"
      texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
    ><Botao>Comprar ingresso!</Botao></Card>
    <LineUp />
    </>
  )
}