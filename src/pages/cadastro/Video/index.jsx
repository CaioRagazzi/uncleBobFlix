import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import SnackBar from '../../../components/SnackBar';

function CadastroVideo() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [categorias, setcategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const history = useHistory();
  const { values, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
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

        if (values.titulo === '' || values.url === '' || categoriaEscolhida.id === '') {
          setOpenSnackBar(true);
          return;
        }

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
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
      <SnackBar open={openSnackBar} atClose={() => setOpenSnackBar(false)} />
    </PageDefault>
  );
}

export default CadastroVideo;
