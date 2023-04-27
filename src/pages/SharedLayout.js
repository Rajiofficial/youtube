import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import { Container, Main, Wrapper } from '../style';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../utils/Theme';

function SharedLayout() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default SharedLayout;
