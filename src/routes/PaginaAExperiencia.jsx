import React from 'react'
import Banner from '../Components/Banner'
import Card from "../Components/Card"

export default function PaginaAExperiencia() {
  return (
    <>
    <Banner 
      imagemDeFundo={"https://s3-alpha-sig.figma.com/img/5a7e/3692/d9c827dc1d779a5779d699b85588fc81?Expires=1678665600&Signature=mn6b7s6irGooCFlGYYrpqPHizlpadGpGEZEdlecoapaDdyRnzkAFUsr7EkEk34yrhgIreh7vgTXe3hlGqOYshMDinDYSf63SnU5PM9RTYjuNeQVh5cae0MGOVgiPWItMp7pqxsxYZVMtDxnGEtIEuHxp8g~31o-VrRf63CeoVJ2clO69pH9IO5q4wbPFh4u4sU38EWUaZXQiZRiCR-Bhi18mUVdJlrdR9K~r4aFG7e5bb0jM4GMOmEr0Qf03Wx5xKRcTGaIuHVgWHsNoEL59N0a~Xm-vsiFj2fggau~UQCBXDFc5yybTepONmqDAraWhEyHWbFAt8xy2L6o8Va75dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} 
      styles={{mixBlendMode:'screen'}}
    >A Experiência</Banner>
    <main className="principal">
      <Card 
        imagem={"https://s3-alpha-sig.figma.com/img/1e92/00af/89e4e80dfb110b76d5248a38ee3ab453?Expires=1678665600&Signature=YNFpXewdQbT0XJ5Ah-lr4dCDuVUhAv9whAcykPrxXsaJsbIoe4wxUiYBGNe0jqTRs5amRneSZ6O-K~GHPMeVEfq1gteNlfd6gge5GckKqzDEiJmKZfjS5dVWiqpMRW8R0hg-~twFD3RicAcgCijLw69iTTz9Pd0WxTpie8Q56vWR2i87H0f2oUSsY4KlXRNFwyxbwogsKDikPXnndFOFMXBaaPEIw3BWH4CICINJ6DRaTJXShDHj0THUlzH7aKjSMAhUo0aIviuETNPV1x-0oPTy8fcr3s-srvogZztWqOua9WYuBV-MIaUol6vPwg8RKx-CSWANdTCRqLvlTq5fKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        titulo="Acessibilidade e Inclusão"
        texto="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"
      />
      <Card 
        imagem={"https://s3-alpha-sig.figma.com/img/f18e/035e/9c2328f9c0d5c3c5a7d28714fbefde9f?Expires=1678665600&Signature=TtRpCK~ZoIVjQWX8iMWPRpA7l57f-gMau444l7MloW8FFsPZgIJKYVVojCW8F9-gY27gNj~dxlZbresCWMfmd91IpUkMc-GKVLdkf10TvdwvYce8869kwCMdb6IDloa0l0XyySoEr5w2DZlUZdxLBBpH6ejBAVMR5Qlb9CFAVIDs6H9-bPwFGDDmAG8d2O5Vl4-4NAU1QMyG3MqoRSEEQ~529xe7ulkExAyjiXXMyxwLu9elbNGYt0C3DmCdktSeV4ToEW5PGsfPXPK1qaRNAieiAJ6ZFt37kNeWfV0uETx3xtP0sWtSvLr8taOd-cjG1NzEklhmzjX9UWIJNK8Tng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        titulo="Sustentabilidade"
        texto="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
      />
      <Card 
        imagem={"https://s3-alpha-sig.figma.com/img/10da/6a95/659bf2f5be2f2f4bf6efaadaacf0474b?Expires=1678665600&Signature=J~vvRzBa7RR4n2E4Ou-0JEyiCvsuIMYM1tM6Vdd8ES~7sfAZEj-egB58Z-5KghUqTpdf67csJehyEV15IqCHXac-tCnZxfg82mekkl8QyFr00euxyFttQH6WGa8d1-7OkzSAYjrT1OzRn~G9zmOKanihmvnrB4I~HrOBrIP6cRDdb4s3X412C7m5F-VS1bOdynJ5ltnKGb9OaxfKX4wxuOsbTjJtUIm0hYxlNG71Tpw5eTe0ywfH6VK0fCj03f8JhCpo8jOmmDqDeeqev~yzonrCQrDi2qOGfkO~XNgr0KgLbjXWNd1rSo58EhSOshHwy68feCCCk~UMN3NKHPHJjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        titulo="Atrações"
        texto="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"
      />
    </main>
    </>
  )
}