import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';

const Header = ({ theme }) => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  // const [isDark, setIsDark] = theme;
  // const [isDark, setIsDark] = useContext(ThemeContext);
  const [isDark, setIsDark] = useTheme();

  // if (isDark) {
  //   document.body.classList.add('dark');
  // } else {
  //   document.body.classList.remove('dark');
  // }
  // should not apply to body

  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header">
        <h2 className="title">
          <Link to={'./'}>Daily Needs</Link>
        </h2>
        <p
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem('isDarkMode', !isDark);
          }}
          className="dark-mode"
        >
          <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp; {isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
