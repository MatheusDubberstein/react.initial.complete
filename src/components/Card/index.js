import styled from 'styled-components';

const Container = styled.div`
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  grid-area: ${({ area }) => area};
  padding: 10px;
  margin: 10px;
  background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text1};
  box-shadow: 0px 4px 4px rgba(67, 37, 185, 0.25);
  border-radius: 20px;
`;

export default Container;
