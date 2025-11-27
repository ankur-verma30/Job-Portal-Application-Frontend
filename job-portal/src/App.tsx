import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const theme = createTheme({
    colors: {
      'mineShaft': ['#f9f9f9', '#e0e0e0', '#c7c7c7', '#aeaeae', '#959595', '#7c7c7c', '#636363', '#4a4a4a', '#313131', '#181818', '#000000'],
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
    }
  })
  return (
    <MantineProvider theme={theme} >
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage />} /> 
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App