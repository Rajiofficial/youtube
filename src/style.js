import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0;
`;

export const Main = styled.div`
  flex: 7;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
`;

export const Wrapper = styled.div``;
