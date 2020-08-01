import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((catWithVideos) => {
        console.log(catWithVideos);
        setDadosIniciais(catWithVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              {
                dadosIniciais[0].videos.length !== 0
                  ? (
                    <BannerMain
                      videoTitle={dadosIniciais[0].videos[0].titulo}
                      url={dadosIniciais[0].videos[0].url}
                      videoDescription="Clean Code"
                    />
                  )
                  : null
              }
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return (
          <Carousel key={categoria.id} category={categoria} />
        );
      })}
    </PageDefault>
  );
}

export default Home;
