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
            src="https://s3-alpha-sig.figma.com/img/7c56/c49d/42d6e5d9bbbe9595d772607faba0934e?Expires=1678665600&Signature=kqPn83X~chHPtvm38xkgFVzBy4drVGRN9vIEnSeXzzRPOl8S4ujnitAVMt~ydHgOIqNWpZvodE0-9JzRhWBQ85ltLShGRwsJyTICSij0Ua~j80D8DCR9nebmJ2DABTkLrQURHPcn26To7h3RMLR6y4wFcWOAOJCz5bB5E5NL9Grjd9yU5Us~UYLnwKMuMFuiIjh4bEqncgDtsRB-62ZOmRh7sL8HoMv6IkgjQEp2pZLkbRignlXgfqFVYnKMO1uUKT-An9rt3jMdAfdYQoxTaV8iY0yXm-~XIJ1h7SRkRgV5atzlmcEpgO16pxwiEecj1EUz7Hzhjg0sBrLHJU0eXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
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