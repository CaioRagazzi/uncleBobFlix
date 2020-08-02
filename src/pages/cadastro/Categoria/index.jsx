import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import SnackBar from '../../../components/SnackBar';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://bobflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        if (values.titulo === '' || values.url === '' || values.cor === '') {
          setOpenSnackBar(true);
          return;
        }

        categoriasRepository.create({
          titulo: values.nome,
          descricao: values.descricao,
          cor: values.cor,
        }).then(() => {
          history.push('/');
        });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <MaterialTable
        options={{
          search: false,
          paging: false,
          showTitle: false,
          headerStyle: { backgroundColor: '#53585D', color: 'white', fontWeight: 'normal' },
          padding: 'default',
        }}
        isLoading={categorias.length === 0}
        style={{
          marginBottom: '20px', marginTop: '20px', paddingTop: '0px', backgroundColor: '#53585D',
        }}
        columns={[{ title: 'Nome', field: 'titulo' }, { title: 'Descrição', field: 'descricao' }, { title: 'Cor', field: 'cor' }]}
        data={categorias}
      />

      <Link to="/">
        Ir para home
      </Link>

      <SnackBar open={openSnackBar} atClose={() => setOpenSnackBar(false)} />
    </PageDefault>
  );
}

export default CadastroCategoria;
