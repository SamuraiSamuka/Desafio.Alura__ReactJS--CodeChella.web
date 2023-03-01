import Banner from "../Components/Banner";
import Palco from "../Components/Palco";

export default function PaginaMapaSetores() {
  return (
    <>
    <Banner
        imagemDeFundo="https://s3-alpha-sig.figma.com/img/ddf8/87c7/c671f5db3bd875350266d8cd41e0ba2c?Expires=1678665600&Signature=OY~oPfZeAq0pJ4c4gYxEa-T2CW66KkDbAthSUWxXbrFX8dw1t-m9wEeR-VY9j-rghU~swKap3YSgKXNiDqHbaw2YU1eXk-RcS7qzlylyz7yPgpKsabzy37zLOQn7Ug309uSVSC2FbOVeHLC0hP9efkV93-9t8Wq3sK6lP-7SmZn97Sw1VuHstd7jgTEF384RJD7Wfxj5xo6RPEf4uR5zfrjo3n4LnFAx9e1Yf3zFNaek~p7P7DNVqo4cz6tlK6ZtjSOvnPbIQk0PKX7zWlb40-CAFHWZUa~sjZ96DP2-Xdv03lqiHv-vIHQRYvDxe4nRNusryqOxAitNw9mnwMtnhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        styles={{backgroundPosition: "bottom"}}
    >Mapa de Setores</Banner>
    <Palco />
    </>
  )
}
