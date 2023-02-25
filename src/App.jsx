import './reset.css'
import './index.css'
import Cabecalho from './Components/Cabecalho'
import Rodape from './Components/Rodape'
import Banner from './Components/Banner'
import LineDay from './Components/LineDay'
import LineUp from './Components/LineUp'

function App() {
  return(
    <>
    <Cabecalho />
    <Banner imagemDeFundo={'/Imagens/aurora-boreal.jpg'}>Boas vindas ao <br />#CodeChella2023!</Banner>
    <LineUp />
    <Rodape />
    </>
  )
}

export default App
