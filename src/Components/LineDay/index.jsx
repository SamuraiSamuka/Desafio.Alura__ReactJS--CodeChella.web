import './LineDay.css'

export default function LineDay({titulo, destaque, atracoesB, atracoesC, atracoesD}) {
  return (
    <div className="LineDay container">
        <div className="atracoes__header">
          <hr />
          <h1 className='atracoes__data'>{titulo}</h1>
          <hr />
        </div>
        <div className="atracoes__body">
          <h2 className="atracoes__destaque">{destaque}</h2>
          <ul className="atracoesB">
            {atracoesB.map(atracao => <li className='atracaoB'>{atracao}</li>)}
          </ul>
          <ul className="atracoesC">
            {atracoesC.map(atracao => <li className='atracaoC'>{atracao}</li>)}
          </ul>
          <ul className="atracoesD">
            {atracoesD.map(atracao => <li className='atracaoD'>{atracao}</li>)}
          </ul>
        </div>
    </div>
  )
}
