import './Banner.css'

export default function Banner({children, imagemDeFundo}) {
  return (
    <div className="banner container" style={{backgroundImage:`url(${imagemDeFundo})` }}>
        <h1 className='banner__titulo'>{children}</h1>
    </div>
  )
}
