import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import PropTypes from 'prop-types';

DarkModeBox.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

function DarkModeBox({ isDarkMode, setIsDarkMode }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const baseClasses =
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = isDarkMode => {
    setTheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(isDarkMode);
  };

  return (
    <div
      className={`${baseClasses} ${
        isDarkMode
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
          : 'bg-gradient-to-br from-gray-800 to-gray-900'
      } text-white cursor-pointer flex items-center justify-center min-h-32`}
      onClick={() => handleThemeChange(!isDarkMode)}
    >
      <div>
        {isDarkMode ? (
          <LightModeIcon className="w-12 h-12 mx-auto mb-2" />
        ) : (
          <DarkModeIcon className="w-12 h-12 mx-auto mb-2" />
        )}
        <p className="text-sm font-medium opacity-90">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </div>
    </div>
  );
}

export default DarkModeBox;
