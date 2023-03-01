import Card from '../Card'
import './Setores.css'

export default function Setores() {
  return (
    <section className="setores">
        <h2 className="setores__titulo">Mais detalhes sobre os setores:</h2>
        <div className="setores__cards">
          <Card
            imagem={"https://s3-alpha-sig.figma.com/img/6cfe/1246/9aa0fe0e3a928d3c27e6f48f7ff6032f?Expires=1678665600&Signature=qSmT5XLPXQRvItgoEMLQjOLulPXICzJ4nDHX-1cYuhRdnceKMk2pmfOVXiE69vsjSmAhP8dFDWxzlrbP4Ve1l4Sy4xR~S6WcwQysvcAzC8Bx~YoVYrob2uyIJISISlo2sgHBLb34MkZye0Vs~G-mWRdK6esjmi-MSljCFvi8L0ZgXg0oiG2L6gS9cwGUZflh5hyjOwGTPQJA8JjKvAgGsdesw6fZBK-E5A1ZZVftnj0re55aro--4BJbkg9cTb-O3pvqm6qidiHhrbHfIyAAsGbgySiY1v0cmXTNhkhTOdqc1ZAtCmDFYrlPQbb5bvuyyDgdWPz~fcHyh0S6QpHNwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
            titulo="Pista"
            texto="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."
          />
          <Card
            imagem={"https://s3-alpha-sig.figma.com/img/af4c/af75/8cf289301125b3edc93c063ec81009ed?Expires=1678665600&Signature=E58nYEaYixws6oL662sN4eB4rmegkCX5fGj0cIhlgIRKBayrbfggljX2CH7KrE8kUa-ov4spTawZM7jMOOWoDmT7gRttI3N1D6SdTv3M94~8nDUU1BQMNCKa6FM5IL0QBAtRym-w8OQ~tXDAkRV3GHjOp8cdyK6SkDuWs-878361LPwokrmbjZKXsRqmGooiWdBkFfpR2UiXMSl1ZKHebNjR99mOJam0CbO90glXRS8~qba2l2Fh4H74fw3au8RGKqX-tSPUoGGBxmUCxlW3oaRSvz~Xjm1mOs~BfizMs6mHzcAw2xwKl3QnSQBsQ0cywEqPvBy1zYrgpLObdgaqxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
            titulo="Pista Premium"
            texto="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."
          />
          <Card
            imagem={"https://s3-alpha-sig.figma.com/img/4838/d992/a129816782d9fb7cae703d06aa1aca13?Expires=1678665600&Signature=g7653ueDG5kNs9Mg4bpYy~eha-I~d6XrB~6waPjGtFCd7YrBCJlzEQplVdiQE7VJsdqO82bMgBxKQw~RfT5JFwBG9cM2x4XfOgY1W0sJarN9Hqd2rbM5BxIexeS8re91ajUt6D98GqozJH9FuKtoNfLKRYxy3HElA8BfKftPLggP5w0Nbtt--729-fEvQya0yX3gAzNc2Bphq7FZwYXN35eOhAh-dmXvbfW7BVZxFG7wTq82RRm~URMYMJZeefWPBGhPXHkAVh0FfiyPlqKSz~8Qz10ppkFy-AG7V1P6Nf7FIVsdPqvH3jm~3IBXBj1kvwHmvhCVPuYNqmPl5AQlwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
            titulo="Cadeiras"
            texto="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
          />
        </div>
    </section>
  )
}
