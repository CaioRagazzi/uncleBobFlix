import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (result) => {
      const resp = await result.json();
      setCategorias([...resp]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(initialValues);
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField value={values.nome} onChange={(value) => setValues({ ...values, nome: value.target.value })} label="Nome da Categoria" />
        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={(value) => setValues({ ...values, descricao: value.target.value })} />
        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={(value) => setValues({ ...values, cor: value.target.value })} />
        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )
      }

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
