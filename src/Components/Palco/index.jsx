import './Palco.css'

export default function Palco() {
    const lista = [
        {
        cor: "#0e7df1",
        legenda: "Pista premium"
        },
        {
        cor: "#fe016e",
        legenda: "Pista comum"
        },
        {
        cor: "#01a89e",
        legenda: "Cadeiras térreo"
        },
        {
        cor: "#3f51b5",
        legenda: "Cadeiras superiores"
        },
        {
        cor: "#0e7df1",
        legenda: "Rampas"
        }
    ]
  return (
    <section className="palco container">
        <img 
            src="/Imagens/setores-palco.png" 
            alt="" 
            className="palco__imagem" />
        <div className="palco__info">
            <h3 className='palco__titulo'>Legenda:</h3>
            <ul className='palco__lista'>
                {lista.map(item => <li key={item.legenda} className="palco__lista__item"><div className="palco__lista__cor" style={{backgroundColor: item.cor}}></div>{item.legenda}</li>)}
            </ul>
        </div>
    </section>
  )
}