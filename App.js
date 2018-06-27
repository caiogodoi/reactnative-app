import React from 'react';
import {
  Scene,
  Router,
  Stack,
} from 'react-native-router-flux';
import NewRepoModal from './components/NewRepoModal';
import RepoList from './components/RepoList'
import reducers from './reducers';
import { createStore } from 'redux';


const store = createStore(reducers);

const RouterFlux = () => {
  return (
    <Router store={store}>
      <Stack key="root">
        <Scene key="home" component={RepoList} title="Lista de Repositórios" initial />
        <Scene key="addrepo" component={NewRepoModal} title="Adicionar Repositório" />
      </Stack>
    </Router>
  );
};

export default RouterFlux;