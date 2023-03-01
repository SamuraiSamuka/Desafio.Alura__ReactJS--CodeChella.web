import './Card.css'

export default function Card({imagem, titulo, subtitulo, texto, children, className}) {
  return (
    <section className={`card container ${className}`}>
        <img className='card__imagem' src={imagem} alt="" />
        <div className="card__info">
            <h3 className="card__titulo">{titulo}</h3>
            <h3 className="card__subtitulo">{subtitulo}</h3>
            <p className="card__texto">{texto}</p>
            {children}
        </div>
    </section>
  )
}