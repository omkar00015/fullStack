import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/homePage/index.jsx';
import LoginPage from 'scenes/loginPage/index.jsx';
import ProfilePage from 'scenes/profilePage/index.jsx';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';

function App() {
  const node = useSelector((state) => state.node);
  const theme = useMemo(() => createTheme(themeSettings(node)), [node]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
