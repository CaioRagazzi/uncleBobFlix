import React from 'react';
import Menu from "../../components/Menu";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import BannerMain from "../../components/BannerMain";
import data from "../../data/dados_iniciais.json";

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain videoTitle="Uncle Bob" videoDescription="Clean Code - Uncle Bob" url="https://www.youtube.com/watch?v=7EmboKQH8lM&feature=youtu.be" />
      <Carousel ignoreFirstVideo={true} category={data.categorias[0]} />
      <Footer />
    </div>
  );
}

export default Home;
