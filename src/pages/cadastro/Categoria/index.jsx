import React, { useState } from 'react';
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
        {/* <div>
          <label>
            Descrição:
            <textarea type="text" onChange={(value) => setValues({ ...values, descricao: value.target.value })} value={values.descricao} />
          </label>
        </div> */}
        <div>
          <label htmlFor="color">
            Cor:
            <input id="color" type="color" onChange={(value) => setValues({ ...values, cor: value.target.value })} value={values.cor} />
          </label>
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, idx) => (
          <li key={idx}>
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
