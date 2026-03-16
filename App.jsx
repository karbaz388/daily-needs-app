import { Outlet } from 'react-router';
import './components/Card.css';
import Header from './components/Header';
import { useState } from 'react';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
    //   {/* <Header theme={[isDark, setIsDark]} />
    //   <Outlet context={[isDark, setIsDark]} /> */}
    //   <ThemeProvider>
    //     <Header />
    //     <Outlet />
    //   </ThemeProvider>
    // </ThemeContext.Provider>
    <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  );
};

export default App;
