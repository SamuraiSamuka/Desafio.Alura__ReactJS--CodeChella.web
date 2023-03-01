import './Banner.css'

export default function Banner({children, imagemDeFundo, styles, className}) {
  return (
    <div className={`banner container ${className}`} style={{backgroundImage:`url(${imagemDeFundo})`,...styles }}>
        <h1 className='banner__titulo'>{children}</h1>
    </div>
  )
}
