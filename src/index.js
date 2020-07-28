import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideos from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageNotFound from './pages/404';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideos} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
