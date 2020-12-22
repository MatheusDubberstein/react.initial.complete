import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 400px 400px;
  grid-template-rows: 300px 300px;
  grid-gap: 20px;
  grid-template-areas: 'informacoes perfil' 'links perfil';
`;
