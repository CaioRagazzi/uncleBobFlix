import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const [categorias, setcategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const history = useHistory();
  const { values, handleChange } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=-QvEZoPy96g',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((cat) => {
      setcategorias(cat);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((item) => item.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Video"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;