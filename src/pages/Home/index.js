import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '~/components/Card';
import { Creators as ConfigurationsActions } from '~/store/modules/configurations/duck';

import { Container } from './styles';

function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.configurations.theme);
  return (
    <Container>
      <Card area="informacoes">
        Home asdasd
        <button
          onClick={() =>
            dispatch(
              ConfigurationsActions.setTheme(
                theme === 'light' ? 'dark' : 'light'
              )
            )
          }
          type="button"
        >
          Mudar Tema
        </button>
      </Card>
      <Card area="perfil">Texto que vai dentro do card</Card>
      <Card area="links">Texto que vai dentro do card</Card>
    </Container>
  );
}

export default Home;
